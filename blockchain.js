// 1. 迷你区块链
// 2. 区块链的生成, 新增,校验
// 3. 交易
// 4. 非对称加密
// 5. 挖矿
// 6. p2p

// [{
//     index: 0 ,索引
//     timestamp: 时间戳
//     data: 区块的具体信息 重要是交易信息
//     hash: 当前区块信息的哈希 哈希1
//     prevHash: 上一个区块的哈希 哈希0
//     nonce: 随机数
// },
//     {
//     index: 1, 索引
//     timestamp: 时间戳
//     data: 区块的具体信息 重要是交易信息
//     hash: 当前区块信息的哈希 哈希2
//     prevHash: 上一个区块的哈希 哈希1
//     nonce: 随机数
//     }
// ]
// node.js  自带的库用来计算hash
const crypto = require('crypto')

class Blockchain {
  constructor() {
    this.blockchain = []
    this.data = []
    this.difficulty = 4
      const hash = this.computeHash(0, '0', 1545557384991, 'Hello mac-chain!1', 1)
    console.log(hash);
  }

  // 挖矿
  mine() {
    // 1.生成新区块
    // 2.不停地算hash 直到符合难度的条件 新增区块
  }
  // 生成新区块
    generateNewBlock() {
 
  }
  // 计算哈希
    computeHash(index, prevHash, timestamp, data, nonce) {
        //     index: 1, 索引
        //     timestamp: 时间戳
        //     data: 区块的具体信息 重要是交易信息
        //     hash: 当前区块信息的哈希 哈希2
        //     prevHash: 上一个区块的哈希 哈希1
        //     nonce: 随机数
        return crypto.createHash('sha256').update(index + prevHash + timestamp + data + nonce).digest('hex')
    }
  // 校验区块链
  isValidChain() {}
}

const block = new Blockchain()
