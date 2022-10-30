import sys

class MyDequeue:
    def __init__(self):
        self.deq = []

    def push_front(self, x):
        self.deq = [x] + self.deq

    def push_back(self, x):
        self.deq += [x]

    def pop_front(self):
        if self.isEmpty():
            print(-1)
        else:
            print(self.deq.pop(0))

    def pop_back(self):
        if self.isEmpty():
            print(-1)
        else:
            print(self.deq.pop(-1))

    def size(self):
        print(len(self.deq))

    def empty(self):
        print(1 if len(self.deq) == 0 else 0)

    def isEmpty(self):
        return len(self.deq) == 0

    def front(self):
        if self.isEmpty():
            print(-1)
        else:
            print(self.deq[0])

    def back(self):
        if self.isEmpty():
            print(-1)
        else:
            print(self.deq[-1])


# main-method
if __name__ == "__main__" :
    n = int(sys.stdin.readline().rstrip())
    deq = MyDequeue()

    for _ in range(n):
        command = sys.stdin.readline().rstrip()

        if "push_front" in command:
            deq.push_front(command.split()[1])
        elif "push_back" in command:
            deq.push_back(command.split()[1])
        elif "pop_front" in command:
            deq.pop_front()
        elif "pop_back" in command:
            deq.pop_back()
        elif "size" in command:
            deq.size()
        elif "empty" in command:
            deq.empty()
        elif "front" in command:
            deq.front()
        elif "back" in command:
            deq.back()