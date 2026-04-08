---
layout: default
title: "Advanced Retrievers"
parent: "LlamaIndex"
grand_parent: "Конспекты"
nav_order: 1
---

<!-- prettier-ignore-start -->

# Advanced Retrievers

{: .no_toc }

## Table of contents

{: .no_toc .text-delta }

1. TOC
{:toc}
<!-- prettier-ignore-end -->

---

## Index types

### Vector Store Index

- Stores vector embeddings for each document chunk
- Best suited for semantic retrieval based on meaning
- Commonly used in LLM pipelines and RAG applications

### Document Summary Index

- Generates and stores summaries of documents at indexing time
- Uses summaries to filter documents before retrieving full content
- Especially useful for large and diverse document sets that cannot fit in the context window of an LLM

### Keyword Table Index

- Extracts keywords from documents and maps them to specific content chunks
- Enables exact keyword matching for rule-based or hybrid search scenarios
- Ideal for applications requiring precise term matching

## Core Retriever

- The core retriever is the main component responsible for fetching relevant documents based on a query

### Vector Index Retriever

The Vector Index Retriever searches by meaning, not just by exact words. It converts both document chunks and the user query into embeddings, compares them, and returns the chunks that are closest in meaning. This makes it a strong default choice for semantic search and a common retriever in RAG pipelines.

**How it works**:

- Documents are split into nodes, and each node is turned into an embedding with the selected embedding model
- The query is converted into an embedding in the same vector space
- The retriever compares the query embedding with node embeddings
- It returns the nodes whose meaning is most similar to the query, often ranked by cosine similarity
- Generates embeddings in batches of 2048 nodes by default

**When to use:**

- General-purpose semantic search
- Questions where users may phrase the same idea in different words
- RAG pipelines that need context based on meaning
- Cases where exact keyword matching is less important than overall relevance

**Key characteristics from authoritative source:**

- **Stores embeddings for each document chunk** in a VectorStoreIndex
- **Retrieves based on meaning and context**, not only on exact token matches
- **Common default for LLM and RAG workflows** that rely on semantic retrieval

**Strengths**:

- Finds relevant text even when the wording is different
- Handles synonyms, paraphrases, and related ideas well
- Works naturally with plain-language user queries

**Limitations**:

- May miss important exact terms, identifiers, or rare keywords
- Quality depends heavily on the embedding model being used
- Large collections can increase storage and computation costs

### BM25 Retriever

BM25 is a keyword-based retriever. It searches for exact query terms in documents and ranks results by how important those terms are. Unlike vector retrieval, it does not search by meaning, so it works best when the query and the relevant text use the same wording.

**How it works:**

- Looks for exact keyword matches
- Gives more weight to informative terms and less weight to common words
- Adjusts scores so repeated words and long documents do not dominate too much

#### When to Use BM25

**Best suited for:**

- Technical documentation where exact names and terms matter
- Legal or academic text with specialized vocabulary
- Product catalogs, specs, or logs with precise identifiers
- Search tasks where exact keyword matching is more important than semantic similarity

**Strengths:**

- Very good at exact term matching
- Fast and efficient for large search indexes
- Does not require embeddings or a semantic model

**Limitations:**

- Does not understand synonyms or paraphrases
- Struggles when the query uses different wording than the document
- Captures less context than semantic retrieval methods

### Document Summary Index Retrievers

Document Summary Index Retrievers search through document summaries first and then return the original documents. This is useful when the collection is large and documents cover different topics.

**How it works**:

- A summary is created for each document during indexing
- The query is matched against those summaries
- The retriever selects the best documents and returns the full original documents

**Types**:

1. **DocumentSummaryIndexLLMRetriever**:
   - Uses an LLM to decide which summaries best match the query
   - Better for nuanced or complex questions
   - Slower and more expensive

2. **DocumentSummaryIndexEmbeddingRetriever**:
   - Compares the query embedding with summary embeddings
   - Faster and cheaper
   - Best for straightforward semantic matching

**When to use**:

- Large or diverse document collections
- Document-level filtering before deeper retrieval
- Multi-document QA across clearly different topics

**Main settings**:

- `choice_top_k`: number of documents returned by the LLM retriever
- `similarity_top_k`: number of documents returned by the embedding retriever

**Strengths**:

- Reduces the search space quickly
- Works well when documents have distinct topics
- Keeps the full document context in the result

**Limitations**:

- Requires summaries to be created during indexing
- Retrieval quality depends on summary quality
- The LLM-based version is slower and costs more

### Auto Merging Retriever - Hierarchical Context Preservation

Auto Merging Retriever helps keep context in long documents. It splits a document into small child chunks and larger parent chunks. If several matching child chunks come from the same parent, the retriever returns the parent chunk instead.

**How it works**:

- Documents are split hierarchically into parent and child nodes
- Child nodes are used for precise retrieval
- If enough child nodes from one parent match, the retriever merges them into the parent node
- Child nodes are usually stored in the vector store, while parent nodes are stored in the docstore

**Why it is useful**:

- Small chunks improve search precision
- Parent chunks restore the surrounding context
- This reduces fragmentation in long documents

**When to use**:

- Long documents where small chunks lose important context
- Legal texts, research papers, and technical documentation
- Cases where you need both precise matching and broader context
- Documents with a clear section or subsection structure

**Main settings**:

- `chunk_sizes`: chunk sizes from larger to smaller levels
- `chunk_overlap`: overlap between chunks

**Strengths**:

- Preserves context automatically
- Keeps retrieval precise while returning richer context
- Works well for structured long-form content

**Limitations**:

- More complex than basic retrievers
- Works best when documents have a clear hierarchy
- Uses more storage because it keeps multiple chunk levels
- Usually unnecessary for short documents

### Recursive Retriever - Multi-Level Reference Following

Recursive Retriever follows references from one node to another. Instead of returning only the first matching chunk, it can continue through linked nodes, retrievers, or query engines and bring back related content.

**How it works**:

- The retriever finds an initial relevant node
- If that node contains a reference, it follows the link
- It can continue across multiple levels of references
- References may point to other chunks, retrievers, query engines, or structured data

**Why it is useful**:

- Connects related information across documents
- Helps retrieve context that is not stored in a single chunk
- Works well when content is linked through citations or metadata

**When to use**:

- Academic and research papers with citations
- Documentation with cross-references
- Knowledge bases with interconnected entries
- Cases where nodes point to tables, databases, or other documents

**Main settings**:

- `retriever_dict`: maps keys or node IDs to retrievers
- `query_engine_dict`: maps keys to query engines for sub-queries

**Strengths**:

- Follows multi-step relationships automatically
- Retrieves broader connected context
- Useful for systems with strongly linked information

**Limitations**:

- Requires well-defined references between nodes
- Can become slow with deep reference chains
- Harder to debug when many links are involved
- May pull in too much related content if loosely configured

### Query Fusion Retriever - Multi-Query Enhancement with Advanced Fusion

Query Fusion Retriever combines results from multiple retrievers and multiple versions of the same query. It can generate extra query variants with an LLM, run them across several retrievers, and then fuse the results into one ranked list.

**How it works**:

- Starts with the original query
- Can generate additional query variants when `num_queries > 1`
- Sends each query to one or more retrievers
- Merges duplicate results and reranks them with a fusion strategy

**Fusion modes**:

1. **Reciprocal Rank Fusion (RRF) Mode**:
   - Combines results by rank, not by raw score
   - A node gets more credit when it appears near the top in multiple result lists
   - Good when retrievers use very different scoring systems

2. **Relative Score Fusion Mode**:
   - Normalizes each result list with MinMax scaling
   - Applies retriever weights and then sums the normalized scores
   - Good when you want score-aware fusion across retrievers such as vector search and BM25

3. **Distribution-Based Score Fusion Mode**:
   - A variant of relative score fusion
   - Uses the mean and standard deviation of each result set instead of simple min/max scaling
   - Useful when score distributions vary a lot or contain outliers

**When to use**:

- Hybrid retrieval with multiple retrievers, such as vector search + BM25
- Queries that may need several phrasings to improve recall
- Systems where one retriever alone misses relevant results
- Cases where you want broader coverage before final synthesis

**Main settings**:

- `num_queries`: total number of queries including the original one
- `retriever_weights`: weight of each retriever in score-based fusion
- `similarity_top_k`: final number of results returned
- `mode`: fusion strategy, such as `reciprocal_rerank`, `relative_score`, or `dist_based_score`

**Strengths**:

- Improves recall by using multiple query formulations
- Combines signals from different retrievers in one result list
- Useful for hybrid search and more robust retrieval

**Limitations**:

- More expensive when extra queries are generated with an LLM
- Adds latency because it runs multiple retrieval steps
- Poor weights or too many generated queries can introduce noise
- Score-based modes depend on retrievers returning meaningful scores
