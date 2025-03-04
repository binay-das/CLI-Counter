# Counter CLI

## Description

Counter CLI is a simple command-line tool built with Node.js and Commander.js. It allows users to count the number of lines, words, and letters in a given file.

## Features

- Count the number of lines in a file.
- Count the number of words in a file.
- Count the number of letters in a file.

## Prerequisites

Ensure you have the following installed:

- `Node.js` 
- `npm`

## Installation

Clone the repository:

```
git clone https://github.com/binay-das/CLI-Counter.git
cd CLI-Counter
```
Install dependeacies:
```sh
npm install
```


## Usage
You can run the script using `Node.js` directly:

```
node index.js <command> <file_name>
```

## Available Commands
`Count Lines`
```
node index.js countLines <file_name>
```
`Count Words`
```
node index.js countWords <file_name>
```
`Count Letters`
```
node index.js countLetters <file_name>
```