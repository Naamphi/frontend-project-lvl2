### Вычислитель отличий:
### Hexlet tests and linter status:
[![Actions Status](https://github.com/Naamphi/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Naamphi/frontend-project-lvl2/actions)
[![github-test](https://github.com/Naamphi/frontend-project-lvl2/.github/github-test.yml/badge.svg)](https://github.com/Naamphi/frontend-project-lvl2/actions)
### О проекте:
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

1) Поддержка разных входных форматов: yaml, json
2) Генерация отчета в виде plain text, stylish и json
### Справочная информация по утилите:
```bash
$gendiff -h
```
```bash
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
```

### Сравнение плоских файлов (JSON):
[![asciicast](https://asciinema.org/a/htFkSf72YH4VkIFXOnpATYXxX.svg)](https://asciinema.org/a/htFkSf72YH4VkIFXOnpATYXxX)
