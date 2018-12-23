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
// 创世区块
const initBlock = 
    {
        index: 0,
        data: 'Hello mac-chain!',
        prevHash: '0',
        timestamp: 1545557384991,
        nonce: 4957,
        hash: '000055c4ba59a27a8024520b41059e1028fc6dfebd424552577d1ad6aecefa78'
    }

class Blockchain {
  constructor() {
    this.blockchain = [initBlock]
    this.data = []
    this.difficulty = 4
    //   const hash = this.computeHash(0, '0', 1545557384991, 'Hello mac-chain!', 1)
    // console.log(hash);
  }
// 获得最新区块
  getLastBlock(){
    return this.blockchain[this.blockchain.length-1]
  }

  // 挖矿
  mine() {
    // 1.生成新区块 一页新的记账加入区块链
    // 2.不停地算hash 直到符合难度的条件的哈希值 获得记账权 新增区块
    let nonce = 0
    const index = this.blockchain.length
    const data = this.data
    const prevHash = this.getLastBlock().hash
    let timestamp = new Date().getTime()
    let hash = this.computeHash(index, prevHash, timestamp, data, nonce)

    while (hash.slice(0, this.difficulty) !== '0'.repeat(this.difficulty)) {
      nonce += 1
      hash = this.computeHash(index, prevHash, timestamp, data, nonce)
    }
    console.log('mine over',{
        index,
        data,
        prevHash,
        timestamp,
        nonce,
        hash
    })
  }
  // 生成新区块
  generateNewBlock() {}
  // 计算哈希
  computeHash(index, prevHash, timestamp, data, nonce) {
    //     index: 1, 索引
    //     timestamp: 时间戳
    //     data: 区块的具体信息 重要是交易信息
    //     hash: 当前区块信息的哈希 哈希2
    //     prevHash: 上一个区块的哈希 哈希1
    //     nonce: 随机数
    return crypto
      .createHash('sha256')
      .update(index + prevHash + timestamp + data + nonce)
      .digest('hex')
  }
  // 校验区块链
  isValidChain() {}
}

const block = new Blockchain()
block.mine()
