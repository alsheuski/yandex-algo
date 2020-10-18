Рита вчера по дороге на работу задумалась: можно ли реализовать очередь с использованием стеков?
На самом деле можно, и вам предстоит это сделать.
Очередь должна поддерживать методы:
put - добавляет элемент
get - извлекает самый ранее добавленный элемент
get_size - возвращает текущий размер очереди

## Формат ввода

В первой строке записано n - количество команд, оно не превосходит 5000. В каждой из следующих n строк записана одна из команд:
put value
get
get_size
value - целое число, по модулю не превосходящее 1000.

## Формат вывода

Выведите результат вызова методов. Если метод get вызывается для пустой очереди, нужно напечатать 'error'.

### Пример 1

Ввод
5
put -9
get
put -3
put 2
get_size

Вывод
-9
2

### Пример 2

Ввод
8
put -7
get
put 1
get
put -2
get
put 2
get_size

Вывод
-7
1
-2
1

### Пример 3

Ввод
9
put -3
put 0
put 7
put 4
get_size
put -4
get_size
get
get_size

Вывод
4
5
-3
4

## Примечания

Основные требования к выполнению задания:
Должен быть соблюден принцип FIFO.
В реализации очереди используются только стеки.
Готовую очередь из стандартной библиотеки языка программирования использовать нельзя.
Постарайтесь, чтобы получившаяся очередь была эффективной. То есть амортизированная (средняя) стоимость каждой операции O(1).
Количество стеков, которое вы можете задействовать в решении, не ограничено!