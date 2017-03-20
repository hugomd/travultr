# Travultr 🐦 [![](https://img.shields.io/npm/v/travultr.svg?maxAge=2592000)](https://npmjs.com/travultr) [![](https://img.shields.io/npm/dm/travultr.svg?maxAge=2592000)](https://npmjs.com/travultr) [![](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](./LICENSE) [![Build status](https://badge.buildkite.com/d339a43f0f35b9a705c81cbe96d7b9f7c17c03991dfe0b49b4.svg)](https://buildkite.com/open-source/travultr)
A CLI client for [Vultr](https://vultr.com), following their [API documentation](https://www.vultr.com/api/).

*Note: this project is a work in progress*.

# Installation
```
npm install travultr
```

# Progress
* [ ] server
  * [x] list
  * [ ] reboot
  * [ ] start
  * [ ] stop
  * [ ] create
* [ ] block storage
  * [ ] list
  * [ ] attach
  * [ ] create
  * [ ] delete
  * [ ] detach
  * [ ] set label
  * [ ] resize
* [ ] regions
  * [ ] list
* [ ] dns
  * [ ] list records
  * [ ] create domain
  * [ ] delete domain
  * [ ] create record
  * [ ] update record
  * [ ] delete record

# Usage
```
Usage: travultr [options] [command]


Commands:

  server      Access server resources
  version|v   print travultr version
  help [cmd]  display help for [cmd]

Options:

  -h, --help     output usage information
  -V, --version  output the version number
```

# Where'd the name `travultr` come from?
John Travolta.

![](https://gif.now.sh/john%20travolta/TA5UdQTc3NVKg)

# Contributing
1. Clone the repo
2. Make a new local branch
3. Change what you'd like
4. Write some tests
5. Make a Pull Request!

✌️

# License
MIT, see [LICENSE](./LICENSE)
