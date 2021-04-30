---
layout: default
title: "Способы хранения данных в Python"
grand_parent: "Конспекты"
parent: "Python"
nav_order: 2
---

# Способы хранения данных в Python

## Нативный Python

### Dataclass

```py
from dataclasses import dataclass

@dataclass
class PartData:
    description: str = ''
    serial_number: str = ''
    part_number: str = ''
    part_class: int = 0
    part_type: int = 0
    part_marker_index: int = 0
    max_capacity: int = 0
    level: int = 0
    colorant_index: str = ''
    unit: int = 0
	
	
PartData(
	description=snmp_data.get('description', ''),
	serial_number=snmp_data.get('serial_number', ''),
	part_number=snmp_data.get('part_number', ''),
	part_class=as_int(snmp_data.get('part_class', 0)),
	part_type=as_int(snmp_data.get('part_type', 0)),
	part_marker_index=as_int(snmp_data.get('part_marker_index', 0)),
	max_capacity=as_int(snmp_data.get('max_capacity', 0)),
	level=as_int(snmp_data.get('level', 0)),
	colorant_index=snmp_data.get('colorant_index', '0'),
	unit=as_int(snmp_data.get('unit', 0)),
    )
	
```

### Enum

[Подробная информация по ENUM](https://docs.python.org/3/library/enum.html)

```py
class PrinterStatus(Enum):
    """ Printer statuses for frontend display """
    ok = 'ok'
    warning = 'warning'
    unavailable = 'unavailable'
    error = 'error'

    @classmethod
    def choices(cls):  # Нужно для использования в качестве choises в полях моделей
        return tuple((i.name, i.value) for i in cls)
		
print(PrinterStatus.ok)
```

## Django

### IntegerChoices


```py
from django.db import models

class EventTypes(models.IntegerChoices):
    NEW_DEVICE = 0, _('New device')
    FIRST_THRESHOLD_VALUE = 1, _('First threshold value')
    SECOND_THRESHOLD_VALUE = 8, _('Second threshold value')
    CONNECTION_STATUS = 2, _('Connection status')
    CRITICAL_ERROR = 3, _('Critical error')
    NON_CRITICAL_ERROR = 4, _('Non critical error')
    HISTORY_REPLACE_PART = 5, _('History replace part event')
	
print(EventTypes.HISTORY_REPLACE_PART)
print(EventTypes(value['event_type']).label) # Выведим текстовое описания 
```

### TextChoices

```py
class EventSourceChoices(models.TextChoices):
    HAND = 'hand', _('Manually')
    AGENT = 'agent', _('From agent')
    VENDOR = 'vendor', _('Vendor software')
    FILE = 'file', _('Uploaded from a file')
    OTHER = 'other', _('Other')
```
