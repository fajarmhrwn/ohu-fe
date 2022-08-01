# OHU Frontend

Frontend dari Web OHU

## Tech Stack

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) (package manager)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)

## Installation

- Clone the repo

```
git clone https://github.com/KATITB22/ohu-fe.git
```

- Intsall packages

```
yarn
```

- Run the app

```
yarn dev
```

## Git Branching

Setiap repository akan memiliki 3 branch utama, yaitu master, development, dan production.
Setiap pembuatan branch baru, buat branch baru dengan base master.
Format: `<tipe>/<judul>`

List tipe:

- Story, untuk fitur atau use case baru
- Task, untuk bug fixing, performance improvement, refactor, dsb.

Judul: gunakan kebab case

Contoh:

- story/api-attendance
- story/page-attendance
- task/improve-sql-performance-on-xxxx-method

Setelah selesai, Pull Request ke master dan wajib minta peer review ke kadiv/wakadiv.

## Code Styling & Repository

Sangat dimohon untuk memperhatikan hal-hal berikut:

1. Penamaan variabel, fungsi, dan kelas yang bermakna
2. Penyingkatan harus mudah ditebak dan masih terbaca
   - Misalkan, codeStylingAndRepository, terlalu panjang, disingkat menjadi: codeStyleNRepo
   - Yang Salah: csnr, cdStNrep

## Semantic Commit Message

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

### [SOP Developers Workflow](https://docs.google.com/document/d/12Ko3DKYiEBoLxn1Z0gpVBmrNwEv4rm6LfWiPOCkqy00/edit#)

### [Figma](https://www.figma.com/file/RSJkT0nDexJarqdRxhRXeW/Web-OHU?node-id=411%3A2)
