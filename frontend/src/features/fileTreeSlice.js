import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  "0000": {
    type: "folder",
    name: "My Workspace",
    children: [
      "0001",
      "0002",
      "0003",
    ],
  },

  "0001": {
    type: "folder",
    name: "C++ Codes",
    children: [
      "0005",
      "0006"
    ],
    parent: "0000"
  },

  "0002": {
    type: "folder",
    name: "Python Codes",
    children: [
      "0007",
      "0008"
    ],
    parent: "0000"
  },

  "0003": {
    type: "folder",
    name: "Java Codes",
    children: [
      "0009",
      "0010"
    ],
    parent: "0000"
  },

  "0005": {
    type: "file",
    name: "hello_world.cpp",
    language: "c++",
    value: '#include <iostream>\r\n\r\nint main() {\r\n    std::cout << "Hello World!";\r\n    return 0;\r\n}\r\n',
    parent: "0001"
  },

  "0006": {
    type: "file",
    name: "palindrome.cpp",
    language: "c++",
    value: '#include<iostream>\r\n#include<ctype.h>\r\nusing namespace std;\r\nint main() {\r\n\tstring s; cin >> s;\r\n\tint a = 0;\r\n\tfor(int i = 0; i < (s.length() / 2); i++) \r\n\t\tif(s[i] == s[s.length() - 1 - i]) a++;\r\n\tif(a == (s.length() / 2)) cout << "YES";\r\n\telse cout << "NO";\r\n\treturn 0;\r\n}\r\n',
    parent: "0001"
  },

  "0007": {
    type: "file",
    name: "fibonacci.py",
    language: "python",
    value: 'def fib(num):\r\n  if num <= 2:\r\n    return 1\r\n  return fib(num - 1) + fib(num - 2)\r\n\r\n\r\nn = int(input())\r\n\r\nprint(fib(n))\r\n',
    parent: "0002"
  },

  "0008": {
    type: "file",
    name: "odd_even.py",
    language: "python",
    value: 'n = int(input())\r\n\r\nprint(n,"is Even.") if (n % 2) == 0 else print(n,"is Odd.")\r\n',
    parent: "0002"
  },

  "0009": {
    type: "file",
    name: "factorial.java",
    language: "java",
    value: 'public class Factorial { \r\n    public static void main(String[] args) { \r\n        int num = 10; \r\n        long factorial = 1; \r\n        for(int i = 1; i <= num; ++i) { \r\n            factorial *= i; \r\n        } \r\n        System.out.printf("Factorial of %d = %d", num, factorial); \r\n    } \r\n}',
    parent: "0003"
  },

  "0010": {
    type: "file",
    name: "digit_sum.java",
    language: "java",
    value: 'import java.util.Scanner;\r\npublic class SumDigit {\r\n    public static void main(String[] argh){\r\n        int x = 2, y = 3;\r\n        System.out.print(x+y);\r\n    }\r\n}\r\n',
    parent: "0003"
  },

}

export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {

    addNewFile: (state, action) => {
      const { id, name, language, parent } = action.payload
      state[id] = {
        type: 'file',
        name,
        language,
        parent,
        value: ''
      }
      state[parent].children.push(id)
    },

    addNewFolder: (state, action) => {
      const { id, name, parent } = action.payload
      state[id] = {
        type: 'folder',
        name,
        parent,
        children: []
      }
      state[parent].children.push(id)
    },

    updateValue: (state, action) => {
      const { id, value } = action.payload
      state[id] = {
        ...state[id],
        value
      }
    }

  },
})

export const { addNewFile, addNewFolder, updateValue } = fileTreeSlice.actions

export default fileTreeSlice.reducer