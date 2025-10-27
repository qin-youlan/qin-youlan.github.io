// hx.js - 血脉极限计算相关功能

// 1. 血脉基础属性数据
const bloodlineAttributes = {
  "赛宁": {
    "男": { "体": 0.8, "力": 1.0, "技": 1.0, "敏": 0.5, "感": 0.3, "意": 0.3, "总": 3.9 },
    "女": { "体": 0.7, "力": 0.9, "技": 1.1, "敏": 0.6, "感": 0.4, "意": 0.2, "总": 3.9 }
  },
  "希尔": {
    "男": { "体": 1.1, "力": 0.7, "技": 0.9, "敏": 0.3, "感": 0.3, "意": 0.3, "总": 3.6 },
    "女": { "体": 1.0, "力": 0.6, "技": 1.0, "敏": 0.4, "感": 0.4, "意": 0.2, "总": 3.6 }
  },
  "佩尔": {
    "男": { "体": 0.5, "力": 0.9, "技": 1.2, "敏": 0.3, "感": 0.7, "意": 0.3, "总": 3.9 },
    "女": { "体": 0.4, "力": 0.8, "技": 1.3, "敏": 0.4, "感": 0.8, "意": 0.2, "总": 3.9 }
  },
  "切瓦": {
    "男": { "体": 0.9, "力": 1.1, "技": 0.7, "敏": 0.3, "感": 0.3, "意": 0.3, "总": 3.6 },
    "女": { "体": 0.8, "力": 1.0, "技": 0.8, "敏": 0.4, "感": 0.4, "意": 0.2, "总": 3.6 }
  },
  "牛头": {
    "男": { "体": 1.2, "力": 1.0, "技": 0.5, "敏": 0.3, "感": 0.3, "意": 0.3, "总": 3.6 },
    "女": { "体": 1.1, "力": 0.9, "技": 0.6, "敏": 0.4, "感": 0.4, "意": 0.2, "总": 3.6 }
  },
  "法拉": {
    "男": { "体": 0.3, "力": 0.5, "技": 1.1, "敏": 0.9, "感": 0.6, "意": 0.3, "总": 3.7 },
    "女": { "体": 0.2, "力": 0.4, "技": 1.2, "敏": 1.0, "感": 0.7, "意": 0.2, "总": 3.7 }
  },
  "古特": {
    "男": { "体": 0.7, "力": 1.2, "技": 0.3, "敏": 0.9, "感": 0.3, "意": 0.5, "总": 3.9 },
    "女": { "体": 0.6, "力": 1.1, "技": 0.4, "敏": 1.0, "感": 0.4, "意": 0.4, "总": 3.9 }
  },
  "玛夏": {
    "男": { "体": 1.0, "力": 0.8, "技": 0.3, "敏": 0.3, "感": 0.3, "意": 1.2, "总": 3.9 },
    "女": { "体": 0.9, "力": 0.7, "技": 0.4, "敏": 0.4, "感": 0.4, "意": 1.1, "总": 3.9 }
  },
  "瑞格": {
    "男": { "体": 0.7, "力": 0.3, "技": 1.0, "敏": 1.0, "感": 0.3, "意": 0.6, "总": 3.9 },
    "女": { "体": 0.6, "力": 0.2, "技": 1.1, "敏": 1.1, "感": 0.4, "意": 0.5, "总": 3.9 }
  },
  "瓦诺": {
    "男": { "体": 0.5, "力": 0.3, "技": 0.8, "敏": 0.3, "感": 0.8, "意": 1.0, "总": 3.7 },
    "女": { "体": 0.4, "力": 0.2, "技": 0.9, "敏": 0.4, "感": 0.9, "意": 0.9, "总": 3.7 }
  },
  "祖扎": {
    "男": { "体": 0.8, "力": 0.3, "技": 0.7, "敏": 1.2, "感": 0.3, "意": 0.3, "总": 3.6 },
    "女": { "体": 0.7, "力": 0.2, "技": 0.8, "敏": 1.3, "感": 0.4, "意": 0.2, "总": 3.6 }
  },
  "萨尼": {
    "男": { "体": 0.8, "力": 0.9, "技": 0.3, "敏": 1.1, "感": 0.3, "意": 0.3, "总": 3.7 },
    "女": { "体": 0.7, "力": 0.8, "技": 0.4, "敏": 1.2, "感": 0.4, "意": 0.2, "总": 3.7 }
  },
  "宏朝": {
    "男": { "体": 0.3, "力": 0.7, "技": 1.0, "敏": 1.1, "感": 0.5, "意": 0.3, "总": 3.9 },
    "女": { "体": 0.2, "力": 0.6, "技": 1.1, "敏": 1.2, "感": 0.6, "意": 0.2, "总": 3.9 }
  },
  "精灵": {
    "男": { "体": 0.3, "力": 0.3, "技": 0.5, "敏": 0.7, "感": 1.2, "意": 0.9, "总": 3.9 },
    "女": { "体": 0.2, "力": 0.2, "技": 0.6, "敏": 0.8, "感": 1.3, "意": 0.8, "总": 3.9 }
  },
  "黑精": {
    "男": { "体": 0.5, "力": 0.8, "技": 0.3, "敏": 0.8, "感": 1.2, "意": 0.3, "总": 3.9 },
    "女": { "体": 0.4, "力": 0.7, "技": 0.4, "敏": 0.9, "感": 1.3, "意": 0.2, "总": 3.9 }
  }
};
 // 2. 主血脉-神血特性映射表（寂灭余晖/白夜帷幕无前置）
  const bloodlineGodFeatureMap = {
          "赛宁": {
              "skills": [
                  {
                      name: "赛宁之技",
                      growth: { "力": 0.1, "体": 0.1, "意": 0.1 },
                      life: "血统*2+30",
                      prerequisite: "",
                      "featureBonus": "1.6力量等级、1.5技巧等级、0.6体质等级"
                  }
              ],
              "others": [
                  { name: "真塞宁王族圣痕", 部位: "圣痕", growth: { "力": 0.1, "技": 0.2 }, life: 100, prerequisite: "", "featureBonus": "力量+20、技巧+20、体质+5、暴击+15%、经验获取+40%" },
                  { name: "烈火镕金", 部位: "发色", growth: { "力": 0.1, "技": 0.1 }, life: 80, prerequisite: "", "featureBonus": "力量+5%、技巧+10%、命中+15%、格挡+15%、对异性表白成功率提升" },
                  { name: "不灭之志", 部位: "眼睛", growth: { "力": 0.1, "技": 0.2 }, life: 80, prerequisite: "", "featureBonus": "技巧+10%、暴击+20%、攻击力+5、经验获取+25%" },
                  { name: "引领者", 部位: "眉毛", growth: { "技": 0.1, "体": 0.2 }, life: 80, prerequisite: "", "featureBonus": "技巧+16、体质+24、最大生命+32、负重+40、对异性表白成功率提升" },
                  { name: "无畏", 部位: "耳朵", growth: { "技": 0.1, "体": 0.1 }, life: 80, prerequisite: "", "featureBonus": "力量+5%、技巧+5%、体质+5%、暴击+15%、命中率+25%" },
                  { name: "苍白之血", 部位: "圣痕", growth: { "力": 0.2, "技": 0.1 }, life: 100, prerequisite: "", "featureBonus": "力量+22、技巧+22、攻击力+9、经验获取+40%" },
                  { name: "褪色之眼", 部位: "眼睛", growth: { "力": 0.2, "技": 0.1 }, life: 80, prerequisite: "", "featureBonus": "力量+16%、暴击+15%、攻击力+15" },
                  { name: "寂灭余晖", 部位: "发色", growth: { "力": 0.1, "技": 0.1 }, life: 80, prerequisite: "", "featureBonus": "力量+10%、技巧+5%、命中+35%、格挡+10%、对异性表白成功率提升" },
                  { name: "白夜帷幕", 部位: "眉毛", growth: { "力": 0.2, "体": 0.1 }, life: 80, prerequisite: "", "featureBonus": "力量+24、技巧+16、最大生命+35、负重+40、对异性表白成功率大幅提升" }
              ]
          },
          "佩尔": {
              "skills": [
                  { name: "佩尔之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.8技巧等级、1.2力量等级、0.6感知等级" },
                  { name: "诅咒之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.8技巧等级、1.2力量等级、0.6感知等级" }
              ],
              "others": [
                  { name: "科内塔的意志", 部位: "眉毛", growth: { "技": 0.2, "敏": 0.1 }, life: 80, prerequisite: "", "featureBonus": "技巧+10%、命中率+20%、爆击率+25%" },
                  { name: "野性", 部位: "嘴巴", growth: { "力": 0.1, "技": 0.2 }, life: 70, prerequisite: "", "featureBonus": "力量+16、技巧+24、爆击率+35%" },
                  { name: "真佩尔弗因圣痕", 部位: "圣痕", growth: { "力": 0.1, "技": 0.2 }, life: 90, prerequisite: "", "featureBonus": "力量+15、技巧+20、体质+10、暴击率+20%、经验获取+15%" },
                  { name: "科内塔的洞察", 部位: "眼睛", growth: { "力": 0.2 }, life: 80, prerequisite: "", "featureBonus": "力量+10%、技巧+5%、命中率+25%" },
                  { name: "灵觉", 部位: "耳朵", growth: { "技": 0.1, "感": 0.2 }, life: 130, prerequisite: "专注之眸", "featureBonus": "技巧+16、感知+24、命中率+30%、偏斜+20%" },
                  { name: "日蚀之印", 部位: "圣痕", growth: { "力": 0.1, "技": 0.2 }, life: 90, prerequisite: "", "featureBonus": "力量+15、技巧+20、体质+10、暴击率+20%、经验获取+15%" },
                  { name: "夜之吻", 部位: "嘴巴", growth: { "力": 0.1, "技": 0.2 }, life: 70, prerequisite: "", "featureBonus": "力量+24、技巧+16、爆击率+20%、攻击力+9" },
                  { name: "异色瞳", 部位: "眼睛", growth: { "力": 0.2 }, life: 70, prerequisite: "", "featureBonus": "力量+10%、技巧+5%、攻击力+12" },
                  { name: "夜之诱惑", 部位: "耳朵", growth: { "技": 0.1, "体": 0.2 }, life: 70, prerequisite: "海神诅咒", "featureBonus": "体质+10%、命中率+40%、偏斜+40%" }
              ]
          },
          "希尔": {
              "skills": [
                  { name: "希尔之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.7体质等级、1.4力量等级、0.6技巧等级" }
              ],
              "others": [
                  { name: "雪山之子", 部位: "脸型", growth: { "技": 0.1, "体": 0.1 }, life: 80, prerequisite: "", "featureBonus": "技巧+5%、体质+10%、最大生命+30" },
                  { name: "真希尔王族圣痕", 部位: "圣痕", growth: { "技": 0.1, "体": 0.2 }, life: 100, prerequisite: "", "featureBonus": "力量+10、技巧+15、体质+20、格挡+10%、经验获取+15%" },
                  { name: "坚固意志", 部位: "嘴巴", growth: { "技": 0.2, "体": 0.1 }, life: 80, prerequisite: "", "featureBonus": "技巧+24、体质+16、最大生命+40、负重+40" },
                  { name: "守护者", 部位: "鼻子", growth: { "力": 0.1, "体": 0.2 }, life: 80, prerequisite: "", "featureBonus": "力量+16、体质+24、负重+50、近战命中+20%" },
                  { name: "澄澈之眼", 部位: "眼睛", growth: { "技": 0.2, "体": 0.1 }, life: 80, prerequisite: "", "featureBonus": "技巧+10%、格挡+20%、经验获取+20%" },
                  { name: "瓦提肯的坚毅", 部位: "发色", growth: { "体": 0.2, "技": 0.1 }, life: 80, prerequisite: "", "featureBonus": "体质+10%、最大生命+15、负重+45、对异性表白成功率提升" },
                  { name: "创造之赐", 部位: "发色", growth: { "体": 0.2 }, life: 80, prerequisite: "瓦斯提亚后裔", "featureBonus": "技巧+5%、体质+10%、最大生命+25、格挡+10%" },
                  { name: "光明之引", 部位: "眉毛", growth: { "力": 0.1, "技": 0.1 }, life: 80, prerequisite: "太阳之子", "featureBonus": "力量+2%、技巧+10%、攻击力+9、近战命中+10%、经验获取+25%" },
                  { name: "极星之引", 部位: "眉毛", growth: { "力": 0.1, "技": 0.2 }, life: 80, prerequisite: "鹰眉", "featureBonus": "力量+24、技巧+16、最大生命+35、负重+40、对异性表白成功率大幅提升" }
              ]
          },
          "牛头": {
              "skills": [
                  { name: "弗莱之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.8体质等级、1.4力量等级、0.5技巧等级" }
              ],
              "others": [
                  { name: "瓦斯提亚血裔", 部位: "鼻子", growth: { "体": 0.1, "意": 0.1 }, life: 80, prerequisite: "", "featureBonus": "体质+10%、意志+5%、最大负重+40" },
                  { name: "山川之子", 部位: "脸型", growth: { "力": 0.1, "体": 0.2 }, life: 70, prerequisite: "", "featureBonus": "力量+24、体质+16、抗暴+10%、最大生命+40" },
                  { name: "真·弗莱德里王族圣痕", 部位: "圣痕", growth: { "力": 0.1, "体": 0.2 }, life: 90, prerequisite: "", "featureBonus": "力量+15、体质+20、意志+10、最大生命+30、经验获取+15%" },
                  { name: "威严", 部位: "嘴巴", growth: { "力": 0.2, "意": 0.1 }, life: 70, prerequisite: "", "featureBonus": "力量+16、意志+24、抗爆+40%" },
                  { name: "索弗利夫的自信", 部位: "嘴巴", growth: { "力": 0.2 }, life: 70, prerequisite: "", "featureBonus": "力量+10%、体质+5%、最大负重+30、格挡+5%" },
                  { name: "太阳之眼", 部位: "眼睛", growth: { "力": 0.1, "体": 0.2 }, life: 80, prerequisite: "", "featureBonus": "力量+16、体质+24、最大生命+40" },
                  { name: "台地之王", 部位: "肤色", growth: { "力": 0.1, "技": 0.2 }, life: 120, prerequisite: "超人体格", "featureBonus": "体质+10%、最大生命+30、格挡+15%" },
                  { name: "非凡", 部位: "脸型", growth: { "力": 0.1, "体": 0.2 }, life: 70, prerequisite: "高地人的自负", "featureBonus": "力量+24、体质+16、最大负重+50、格挡+15%" },
                  { name: "危险嗅觉", 部位: "鼻子", growth: { "体": 0.1, "意": 0.1 }, life: 80, prerequisite: "审判之眼", "featureBonus": "体质+5%、意志+10%、抗爆+20%、经验获取+20%" }
              ]
          },
          "法拉": {
              "skills": [
                  { name: "法拉之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.7技巧等级、1.5敏捷等级、0.5力量等级" }
              ],
              "others": [
                  { name: "席卷之风", 部位: "眉毛", growth: { "敏": 0.2 }, life: 80, prerequisite: "", "featureBonus": "技巧+10%、敏捷+5%、命中+10%、偏斜+40%" },
                  { name: "巧技", 部位: "眼睛", growth: { "技": 0.2, "敏": 0.1 }, life: 80, prerequisite: "", "featureBonus": "技巧+24、敏捷+16、偏斜+20%、爆击+20%、经验获取+15%" },
                  { name: "森林后裔", 部位: "发色", growth: { "技": 0.2, "敏": 0.1 }, life: 90, prerequisite: "", "featureBonus": "力量+10、技巧+20、敏捷+15、攻击力+9、经验获取+30%" },
                  { name: "林中鸟", 部位: "脸型", growth: { "技": 0.2, "敏": 0.1 }, life: 80, prerequisite: "", "featureBonus": "技巧+10%、命中+40%、暴击+10%" },
                  { name: "舞蹈者", 部位: "眉毛", growth: { "敏": 0.2 }, life: 80, prerequisite: "", "featureBonus": "技巧+5%、敏捷+10%、爆击+25%" },
                  { name: "自然之子", 部位: "嘴巴", growth: { "敏": 0.1, "技": 0.2 }, life: 80, prerequisite: "", "featureBonus": "力量+10、技巧+30、爆击+20%、攻击力+9" },
                  { name: "真知之眼", 部位: "眼睛", growth: { "技": 0.2, "敏": 0.1 }, life: 100, prerequisite: "神秘气质", "featureBonus": "技巧+20、敏捷+15、感知+10、远程命中+50%、远程偏斜+20%、经验获取+30%" },
                  { name: "杀戮", 部位: "耳朵", growth: { "力": 0.2, "敏": 0.1 }, life: 120, prerequisite: "自然密码", "featureBonus": "力量+16、敏捷+24、命中+20%、攻击力+12" },
                  { name: "意动", 部位: "鼻子", growth: { "力": 0.1, "感": 0.1 }, life: 120, prerequisite: "死亡讯息", "featureBonus": "力量+5%、感知+10%、偏斜+40%、攻击力+3" }
              ]
          },
          "切瓦": {
              "skills": [
                  { name: "切瓦之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.7力量等级、0.6技巧等级、1.4体质等级" },
                  { name: "海族之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.7力量等级、0.6技巧等级、1.4体质等级" }
              ],
              "others": [
                  { name: "波涛之子", 部位: "脸型", growth: { "力": 0.2, "技": 0.1 }, life: 80, prerequisite: "", "featureBonus": "力量+10%、爆击+20%、攻击力+5" },
                  { name: "幻语感应", 部位: "耳朵", growth: { "技": 0.2, "体": 0.1 }, life: 80, prerequisite: "", "featureBonus": "技巧+24、体质+16、命中+30%、偏斜+30%" },
                  { name: "贵族气度", 部位: "鼻子", growth: { "力": 0.1, "体": 0.2 }, life: 80, prerequisite: "", "featureBonus": "力量+16、体质+24、最大生命+35、负重+20" },
                  { name: "真·切瓦利王族圣痕", 部位: "圣痕", growth: { "力": 0.2, "体": 0.1 }, life: 90, prerequisite: "", "featureBonus": "力量+20、技巧+15、体质+15、攻击力+12、经验获取+15%" },
                  { name: "隐秘之眼", 部位: "眼睛", growth: { "力": 0.1, "体": 0.1 }, life: 80, prerequisite: "瓦斯提亚后裔（弗莱德里痕鼻子）", "featureBonus": "力量+5%、体质+10%、最大生命+20、负重+30" },
                  { name: "海之一族", 部位: "圣痕", growth: { "力": 0.2,"体": 0.1 }, life: 90, prerequisite: "", "featureBonus": "力量+20、技巧+15、体质+10、攻击力+12、经验获取+15%" },
                  { name: "水之灵", 部位: "耳朵", growth: { "技": 0.2 }, life: 80, prerequisite: "", "featureBonus": "力量+5%、技巧+10%、命中+20%、爆击+15%" },
                  { name: "浪潮之涡", 部位: "眉毛", growth: { "力": 0.2, "体": 0.1 }, life: 80, prerequisite: "同类相食（古特嘴巴）", "featureBonus": "力量+16、体质+24、攻击力+18、最大生命+10" },
                  { name: "魅蓝之影", 部位: "发色", growth: { "力": 0.1, "体": 0.1 }, life: 80, prerequisite: "邪神之血", "featureBonus": "力量+5%、体质+10%、爆击+20%" }
              ]
          },
          "古特": {
              "skills": [
                  { name: "古特之技", growth: { "力": 0.1, "体": 0.1, "意": 0.1 }, life: "血统*2+30", prerequisite: "", "featureBonus": "1.8力量等级、0.4体质等级、1.4敏捷等级" }
              ],
              "others": [
                  { name: "獠牙", 部位: "嘴巴", growth: { "力": 0.1, "敏": 0.1 }, life: 70, prerequisite: "", "featureBonus": "力量+10%、敏捷+5%、最大生命+20、经验获取+15%" },
                  { name: "北境征服者", 部位: "脸型", growth: { "力": 0.2, "敏": 0.1 }, life: 90, prerequisite: "", "featureBonus": "力量+20、敏捷+15、体质+10、偏斜+35%、经验获取+30%" },
                  { name: "蜥蜴皮肤", 部位: "肤色", growth: { "力": 0.1, "体": 0.1 }, life: 70, prerequisite: "", "featureBonus": "力量+5%、体质+10%、攻击力+12" },
                  { name: "鲨之眼", 部位: "眼睛", growth: { "力": 0.2, "敏": 0.1 }, life: 70, prerequisite: "", "featureBonus": "力量+10%、暴击+35%" },
                  { name: "古特之王", 部位: "鼻子", growth: { "力": 0.2, "敏": 0.1 }, life: 70, prerequisite: "", "featureBonus": "力量+24、敏捷+16、最大生命+30、远程偏斜+50%" },
                  { name: "北地之子", 部位: "眉毛", growth: { "敏": 0.1, "体": 0.1 }, life: 70, prerequisite: "", "featureBonus": "敏捷+10%、体质+5%、近战命中+20%、远程偏斜+30%、经验获取+20%" },
                  { name: "远方的思念", 部位: "发色", growth: { "敏": 0.1, "体": 0.2 }, life: 70, prerequisite: "高地人的耐力", "featureBonus": "敏捷+16、体质+24、最大生命+35" },
                  { name: "恶魔之眼", 部位: "眼睛", growth: { "力": 0.2, "敏": 0.1 }, life: 70, prerequisite: "雄狮之力", "featureBonus": "力量+10%、偏斜+10%、攻击力+18" },
                  { name: "复仇烈焰", 部位: "鼻子", growth: { "力": 0.2, "敏": 0.1 }, life: 70, prerequisite: "欧里克的神力", "featureBonus": "力量+24、敏捷+16、攻击力+9、最大生命+30" }
              ]
          },
          "默认": {
              "skills": [],
              "others": []
          }
      };

// 3. 神像加成数据
const godBonuses = {
  "palo": { "1": { "体": 0.05, "力": 0.05 }, "2": { "体": 0.1, "力": 0.1 } },
  "koneta": { "1": { "技": 0.05, "敏": 0.05 }, "2": { "技": 0.1, "敏": 0.1 } },
  "sainan": { "1": { "感": 0.05, "意": 0.05 }, "2": { "感": 0.1, "意": 0.1 } }
};

// 4. 全局变量定义
let currentGender = '女';
let currentMainBloodline = '赛宁';
let currentSecondaryBloodline = '赛宁';
let mainBloodlinePercentage = 100;
let secondaryBloodlinePercentage = 0;

// DOM元素引用
let mainBloodlineSelect, secondaryBloodlineSelect, percentageSlider;
let mainPercentage, secondaryPercentage, secondaryBloodlineContainer;
let genderToggle; // 改为使用genderToggle按钮
let bodyValueDisplay, strengthValueDisplay, skillValueDisplay;
let agilityValueDisplay, perceptionValueDisplay, willValueDisplay, totalValueDisplay;

// 添加localStorage功能
// 保存用户选择到localStorage
function saveUserPreferences() {
  const preferences = {
    currentGender,
    currentMainBloodline,
    currentSecondaryBloodline,
    mainBloodlinePercentage,
    secondaryBloodlinePercentage,
    godLevels,
    // 获取神血特性选择
    godSkill: document.getElementById('godSkill')?.value || '',
    godOther1: document.getElementById('godOther1')?.value || '',
    godOther2: document.getElementById('godOther2')?.value || ''
  };
  
  try {
    localStorage.setItem('hxCharacterPreferences', JSON.stringify(preferences));
    console.log('User preferences saved to localStorage');
  } catch (error) {
    console.error('Failed to save user preferences:', error);
  }
}

// 从localStorage加载用户选择
function loadUserPreferences() {
  try {
    const savedPreferences = localStorage.getItem('hxCharacterPreferences');
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      
      // 加载基本设置
      if (preferences.currentGender) currentGender = preferences.currentGender;
      if (preferences.currentMainBloodline) currentMainBloodline = preferences.currentMainBloodline;
      if (preferences.currentSecondaryBloodline) currentSecondaryBloodline = preferences.currentSecondaryBloodline;
      if (preferences.mainBloodlinePercentage) mainBloodlinePercentage = preferences.mainBloodlinePercentage;
      if (preferences.secondaryBloodlinePercentage) secondaryBloodlinePercentage = preferences.secondaryBloodlinePercentage;
      if (preferences.godLevels) {
        godLevels = { ...godLevels, ...preferences.godLevels }; // 合并，确保所有神像都有值
      }
      
      // 加载神血特性选择到全局变量
      if (preferences.godSkill) selectedGodSkill = preferences.godSkill;
      if (preferences.godOther1) selectedGodOther1 = preferences.godOther1;
      if (preferences.godOther2) selectedGodOther2 = preferences.godOther2;
      
      console.log('User preferences loaded from localStorage:', preferences);
      return true;
    }
  } catch (error) {
    console.error('Failed to load user preferences:', error);
  }
  return false;
}

// 初始化DOM元素引用
function initializeDomElements() {
  mainBloodlineSelect = document.getElementById('mainBloodline');
  secondaryBloodlineSelect = document.getElementById('secondaryBloodline');
  percentageSlider = document.getElementById('percentageSlider');
  mainPercentage = document.getElementById('mainPercentage');
  secondaryPercentage = document.getElementById('secondaryPercentage');
  secondaryBloodlineContainer = document.getElementById('secondaryBloodlineContainer');
  genderToggle = document.getElementById('genderToggle'); // 初始化genderToggle按钮
  bodyValueDisplay = document.getElementById('bodyValue');
  strengthValueDisplay = document.getElementById('strengthValue');
  skillValueDisplay = document.getElementById('skillValue');
  agilityValueDisplay = document.getElementById('agilityValue');
  perceptionValueDisplay = document.getElementById('perceptionValue');
  willValueDisplay = document.getElementById('willValue');
  totalValueDisplay = document.getElementById('totalValue');
  
  // 初始化神像按钮引用
  paloBtn = document.getElementById('paloBtn');
  konetaBtn = document.getElementById('konetaBtn');
  sainanBtn = document.getElementById('sainanBtn');
}

// 初始化函数
function initialize() {
  // 初始化DOM元素引用
  initializeDomElements();
  
  // 从localStorage加载用户选择
  const preferencesLoaded = loadUserPreferences();
  console.log('Preferences loaded:', preferencesLoaded);
  
  // 填充下拉框选项
  populateBloodlineSelects();
  
  // 更新神血特性选项
  updateGodFeatureOptions();
  
  // 如果加载了偏好设置，恢复神血特性选择
  if (preferencesLoaded) {
    const savedPreferences = JSON.parse(localStorage.getItem('hxCharacterPreferences'));
    if (savedPreferences) {
      const godSkillSelect = document.getElementById('godSkill');
      const godOther1Select = document.getElementById('godOther1');
      const godOther2Select = document.getElementById('godOther2');
      
      if (godSkillSelect && savedPreferences.godSkill) {
        godSkillSelect.value = savedPreferences.godSkill;
      }
      if (godOther1Select && savedPreferences.godOther1) {
        godOther1Select.value = savedPreferences.godOther1;
      }
      if (godOther2Select && savedPreferences.godOther2) {
        godOther2Select.value = savedPreferences.godOther2;
      }
      
      // 恢复滑块位置
      if (percentageSlider) {
        percentageSlider.value = mainBloodlinePercentage;
        if (mainPercentage) mainPercentage.textContent = mainBloodlinePercentage + '%';
        if (secondaryPercentage) secondaryPercentage.textContent = secondaryBloodlinePercentage + '%';
        
        if (secondaryBloodlineContainer) {
          if (secondaryBloodlinePercentage > 0) {
            secondaryBloodlineContainer.classList.remove('hidden');
          } else {
            secondaryBloodlineContainer.classList.add('hidden');
          }
        }
      }
      
      // 恢复性别切换按钮状态
      if (genderToggle) {
        genderToggle.classList.toggle('female', currentGender === '女');
        genderToggle.classList.toggle('male', currentGender === '男');
        const genderSpan = genderToggle.querySelector('span');
        if (genderSpan) {
          genderSpan.textContent = currentGender === '女' ? '♀' : '♂';
        }
      }
      
      // 更新神像按钮样式
      updateGodButtonStyles();
    }
  }
  
  // 初始化雷达图
  initializeSvgRadar();
  
  // 计算并显示属性
  calculateAttributes();
  
  // 绑定交互事件
  addEventListeners();
}

// 填充主/次血脉下拉框
function populateBloodlineSelects() {
  if (!mainBloodlineSelect || !secondaryBloodlineSelect) return;
  
  const bloodlines = Object.keys(bloodlineAttributes);
  mainBloodlineSelect.innerHTML = '';
  secondaryBloodlineSelect.innerHTML = '';
  
  // 主血脉
  bloodlines.forEach(bloodline => {
    const option = document.createElement('option');
    option.value = bloodline;
    option.textContent = bloodline;
    if (bloodline === currentMainBloodline) option.selected = true;
    mainBloodlineSelect.appendChild(option);
  });
  
  // 次血脉
  bloodlines.forEach(bloodline => {
    const option = document.createElement('option');
    option.value = bloodline;
    option.textContent = bloodline;
    if (bloodline === currentSecondaryBloodline) option.selected = true;
    secondaryBloodlineSelect.appendChild(option);
  });
}

// 更新神血特性选项
function updateGodFeatureOptions() {
  console.log('Updating god feature options...');
  
  // 获取神血特性下拉菜单元素
  const godSkillSelect = document.getElementById('godSkill');
  const godOther1Select = document.getElementById('godOther1');
  const godOther2Select = document.getElementById('godOther2');
  
  if (!godSkillSelect || !godOther1Select || !godOther2Select) {
    console.error('God feature select elements not found!');
    return;
  }
  
  // 清空现有选项
  godSkillSelect.innerHTML = '<option value="" selected>请选择</option>';
  godOther1Select.innerHTML = '<option value="" selected>请选择</option>';
  godOther2Select.innerHTML = '<option value="" selected>请选择</option>';
  
  // 获取当前主血脉的神血特性
  const mainBloodlineFeatures = bloodlineGodFeatureMap[currentMainBloodline];
  
  if (mainBloodlineFeatures) {
    // 添加神子之技选项
    if (mainBloodlineFeatures.skills && mainBloodlineFeatures.skills.length > 0) {
      mainBloodlineFeatures.skills.forEach(skill => {
        const option = document.createElement('option');
        option.value = skill.name;
        option.textContent = skill.name;
        godSkillSelect.appendChild(option);
      });
    }
    
    // 添加其他神血特性选项
    if (mainBloodlineFeatures.others && mainBloodlineFeatures.others.length > 0) {
      mainBloodlineFeatures.others.forEach(feature => {
        const option1 = document.createElement('option');
        option1.value = feature.name;
        option1.textContent = feature.name;
        godOther1Select.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = feature.name;
        option2.textContent = feature.name;
        godOther2Select.appendChild(option2);
      });
    }
  }
  
  // 添加神血特性选项的事件监听器，确保选择时触发属性重新计算并保存
  godSkillSelect.addEventListener('change', function() {
    applyGodFeatures(); // 立即检查并更新提示信息
    calculateAttributes();
    saveUserPreferences();
  });
  godOther1Select.addEventListener('change', function() {
    applyGodFeatures(); // 立即检查并更新提示信息
    calculateAttributes();
    saveUserPreferences();
  });
  godOther2Select.addEventListener('change', function() {
    applyGodFeatures(); // 立即检查并更新提示信息
    calculateAttributes();
    saveUserPreferences();
  });
  
  console.log('God feature options updated successfully');
}

// 5. 雷达图配置 
let radarConfig = [ 
  { name: '感知', angle: 0 }, 
  { name: '体力', angle: Math.PI/3 }, 
  { name: '力量', angle: 2*Math.PI/3 }, 
  { name: '技巧', angle: Math.PI }, 
  { name: '敏捷', angle: 4*Math.PI/3 }, 
  { name: '意志', angle: 5*Math.PI/3 } 
]; 
let radarCenterX = 200; 
let radarCenterY = 200; 
let radarMaxRadius = 150; 
let radarTextRadius = 175;
let radarSvg = null;

// 10. 初始化SVG雷达图
function initializeSvgRadar() {
  console.log('Initializing SVG radar chart...');
  const radarContainer = document.getElementById('radar-container');
  if (!radarContainer) {
    console.error('Radar chart container not found!');
    return;
  }
  
  radarContainer.innerHTML = '';
  radarSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  radarSvg.setAttribute('width', '100%');
  radarSvg.setAttribute('height', '100%');
  radarSvg.setAttribute('viewBox', '0 0 400 400');
  radarContainer.appendChild(radarSvg);
  
  // 绘制雷达图背景
  drawRadarBackground();
  
  console.log('SVG radar chart initialized successfully');
}

// 绘制雷达图背景
function drawRadarBackground() {
  if (!radarSvg) return;
  
  // 六边形背景
  const hexPoints = radarConfig.map(item => {
    const x = radarCenterX + radarMaxRadius * Math.cos(item.angle);
    const y = radarCenterY - radarMaxRadius * Math.sin(item.angle);
    return `${x},${y}`;
  }).join(' ');
  const hexBg = createSvgElement('polygon', {
    points: hexPoints,
    stroke: 'rgba(255,255,255,0.8)',
    'stroke-width': '1',
    fill: 'none'
  });
  radarSvg.appendChild(hexBg);
  
  // 射线
  radarConfig.forEach(item => {
    const x = radarCenterX + radarMaxRadius * Math.cos(item.angle);
    const y = radarCenterY - radarMaxRadius * Math.sin(item.angle);
    const line = createSvgElement('line', {
      x1: radarCenterX,
      y1: radarCenterY,
      x2: x,
      y2: y,
      stroke: 'rgba(255,255,255,0.3)',
      'stroke-width': '0.5'
    });
    radarSvg.appendChild(line);
  });
}

// 11. SVG工具函数
function createSvgElement(tag, attrs) {
  const elem = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const key in attrs) elem.setAttribute(key, attrs[key]);
  return elem;
}

// 12. 数值映射函数
function mapValueToPoint(value, angle) {
  let ratio = 0;
  const isOverMax = value > 1.5;
  if (value > 0 && value <= 1.5) ratio = value / 1.5;
  else if (isOverMax) ratio = 1;
  return {
    x: radarCenterX + radarMaxRadius * ratio * Math.cos(angle),
    y: radarCenterY - radarMaxRadius * ratio * Math.sin(angle),
    isOverMax
  };
}

// 根据数值获取对应的颜色
function getColorByValue(value) {
  // 添加调试日志
  console.log(`Value: ${value}, Color: ${getColor(value)}`);
  return getColor(value);
  
  function getColor(v) {
    if (v < 0.1) return '#ff0000'; // 红色（最显眼，确保能看到变化）
    else if (v >= 0.1 && v < 0.2) return '#00ff00'; // 亮绿色
    else if (v >= 0.2 && v < 0.35) return '#00ffff'; // 青色
    else if (v >= 0.35 && v < 0.55) return '#0000ff'; // 蓝色
    else if (v >= 0.55 && v < 0.75) return '#ffff00'; // 黄色
    else return '#ff00ff'; // 亮紫色 (0.75以上)
  }
}

// 根据数值获取评级和颜色
function getRatingAndColor(value) {
  let rating = 'E';
  let color = '#ffffff'; // 白色
  
  if (value < 0.1) {
    rating = 'E';
    color = '#ffffff'; // 白色
  } else if (value >= 0.1 && value < 0.2) {
    rating = 'D';
    color = '#90ee90'; // 浅绿色
  } else if (value >= 0.2 && value < 0.35) {
    rating = 'C';
    color = '#00ff00'; // 绿色
  } else if (value >= 0.35 && value < 0.55) {
    rating = 'B';
    color = '#00bfff'; // 蓝色
  } else if (value >= 0.55 && value < 0.75) {
    rating = 'A';
    color = '#ffff00'; // 黄色
  } else if (value >= 0.75 && value < 0.95) {
    rating = 'S';
    color = '#9370db'; // 紫色
  } else if (value >= 0.95 && value < 1.20) {
    rating = 'SS';
    color = '#9370db'; // 紫色
  } else if (value >= 1.20 && value < 1.45) {
    rating = 'SSS';
    color = '#9370db'; // 紫色
  } else if (value >= 1.45 && value < 1.65) {
    rating = 'SSS+';
    color = '#9370db'; // 紫色
  } else {
    rating = 'SSS++';
    color = '#9370db'; // 紫色
  }
  
  return { rating, color };
}

// 13. 更新雷达图
function updateSvgRadar(attributes) {
  if (!radarSvg) {
    console.error('Radar SVG element not found!');
    return;
  }
  
  console.log('Updating radar chart with attributes:', attributes);
  
  // 移除所有文本元素，保留背景
  const allElements = radarSvg.querySelectorAll('*');
  allElements.forEach(element => {
    // 只保留背景多边形和线条，移除所有文本和数据层
    if (element.tagName === 'text' || element.classList.contains('data-layer')) {
      element.remove();
    }
  });
  
  // 创建属性值数组，确保与radarConfig顺序一致
  const values = [];
  radarConfig.forEach(item => {
    switch(item.name) {
      case '感知': values.push(attributes.perception || 0); break;
      case '体力': values.push(attributes.body || 0); break;
      case '力量': values.push(attributes.strength || 0); break;
      case '技巧': values.push(attributes.skill || 0); break;
      case '敏捷': values.push(attributes.agility || 0); break;
      case '意志': values.push(attributes.will || 0); break;
      default: values.push(0);
    }
  });
  
  const pointData = radarConfig.map((item, index) => {
    const value = values[index];
    const { x, y, isOverMax } = mapValueToPoint(value, item.angle);
    return { x, y, isOverMax, name: item.name, value };
  });
  
  // 基础填充
  const baseFillPoints = pointData.map(p => `${p.x},${p.y}`).join(' ');
  const baseFill = createSvgElement('polygon', {
    points: baseFillPoints,
    fill: 'rgba(255, 215, 0, 0.6)',
    stroke: 'rgba(255, 215, 0, 1)',
    'stroke-width': '1',
    class: 'data-layer'
  });
  radarSvg.appendChild(baseFill);
  
  // 特殊填充
  const hasOverMax = pointData.some(p => p.isOverMax);
  if (hasOverMax) {
    const specialPoints = pointData.map((p, index) => {
      const ratio = p.isOverMax ? 1/1.5 : 0.1/1.5;
      const x = radarCenterX + radarMaxRadius * ratio * Math.cos(radarConfig[index].angle);
      const y = radarCenterY - radarMaxRadius * ratio * Math.sin(radarConfig[index].angle);
      return `${x},${y}`;
    }).join(' ');
    const specialFill = createSvgElement('polygon', {
      points: specialPoints,
      fill: '#FFD700',
      stroke: 'rgba(255, 204, 0, 1)',
      'stroke-width': '1',
      class: 'data-layer'
    });
    radarSvg.appendChild(specialFill);
  }
  
  // 文本标签 - 为每个值设置评级和颜色
  pointData.forEach((p, index) => {
    const textX = radarCenterX + radarTextRadius * Math.cos(radarConfig[index].angle);
    const textY = radarCenterY - radarTextRadius * Math.sin(radarConfig[index].angle);
    
    // 获取评级和颜色
    const { rating, color } = getRatingAndColor(p.value);
    
    // 属性名称和评级文本 - 格式: "属性名评级"
    const nameWithRatingText = createSvgElement('text', { 
      x: textX, 
      y: textY - 5,
      'text-anchor': 'middle',
      'dominant-baseline': 'middle',
      'font-size': '12',
      'fill': color, // 使用评级对应的颜色
      'z-index': '10'
    });
    nameWithRatingText.textContent = `${p.name}${rating}`;
    radarSvg.appendChild(nameWithRatingText);
    
    console.log(`Attribute: ${p.name}, Value: ${p.value.toFixed(2)}, Rating: ${rating}, Color: ${color}`);
    
    // 属性数值文本 - 使用大字体和粗体确保颜色变化明显可见
    const valueText = createSvgElement('text', { 
      x: textX, 
      y: textY + 15,
      'text-anchor': 'middle',
      'dominant-baseline': 'middle',
      'font-size': '16', // 更大的字体
      'font-weight': 'bold', // 加粗
      'fill': color, // 直接应用计算的颜色
      'filter': 'drop-shadow(0 0 2px rgba(0,0,0,0.5))', // 添加阴影增强可读性
      'z-index': '20'
    });
    valueText.textContent = p.value.toFixed(2);
    radarSvg.appendChild(valueText);
  });
  
  console.log('Radar chart updated successfully with ratings and colors');
}

  // 处理神像按钮点击
function handleGodButtonClick(godId, button) {
  // 切换当前点击神像的等级（0→1→2→0）
  godLevels[godId] = (godLevels[godId] + 1) % 3;
  
  // 更新所有神像按钮的样式
  updateGodButtonStyles();
  
  // 重新计算属性
  calculateAttributes();
  
  // 保存用户偏好
  saveUserPreferences();
}

// 更新神像按钮样式
function updateGodButtonStyles() {
  const godButtons = {
    'palo': paloBtn,
    'koneta': konetaBtn,
    'sainan': sainanBtn
  };
  
  // 更新每个按钮的样式和等级显示
  Object.entries(godButtons).forEach(([godId, btn]) => {
    if (btn) {
      // 移除所有等级样式
      btn.classList.remove('level-0', 'level-1', 'level-2');
      
      // 获取当前按钮的等级
      const currentLevel = godLevels[godId];
      
      // 添加当前等级样式
      btn.classList.add(`level-${currentLevel}`);
      
      // 更新等级显示文本
      const levelSpan = document.getElementById(`${godId}Level`);
      if (levelSpan) {
        levelSpan.textContent = currentLevel;
      }
    }
  });
}

// 完全重写的提示信息更新函数
function updateErrorMessage(element, message, isError = true) {
  // 重置所有样式，确保不受之前样式影响
  element.style.cssText = '';
  
  // 基本样式设置 - 确保显示效果
  element.style.display = 'flex';
  element.style.alignItems = 'center';
  element.style.justifyContent = 'flex-start';
  element.style.padding = '15px 20px';
  element.style.borderRadius = '8px';
  element.style.fontSize = '16px';
  element.style.fontWeight = 'bold';
  element.style.minHeight = '50px';
  element.style.marginTop = '15px';
  element.style.width = '100%';
  element.style.boxSizing = 'border-box';
  element.style.zIndex = '100';
  element.style.visibility = 'visible';
  element.style.opacity = '1';
  element.style.transition = 'all 0.3s ease';
  
  // 错误/信息样式设置 - 移除边框和背景色
  if (isError) {
    // 移除背景色和边框
    element.style.color = '#ff473d';
    element.innerHTML = '<i class="fa fa-exclamation-circle" style="margin-right: 10px; font-size: 24px; color: #ff473d;"></i><span>' + message + '</span>';
  } else {
    // 移除背景色和边框
    element.style.color = '#3a72a3';
    element.innerHTML = '<i class="fa fa-info-circle" style="margin-right: 10px; font-size: 24px; color: #3a72a3;"></i><span>' + message + '</span>';
  }
  
  // 强制重排重绘，确保样式立即生效
  void element.offsetHeight;
  console.log('已更新错误提示:', message, '类型:', isError ? '错误' : '信息');
}

// 完全重写的提示隐藏函数
function hideErrorMessage(element) {
  element.style.display = 'none';
  element.style.visibility = 'hidden';
  element.style.opacity = '0';
  console.log('已隐藏错误提示');
}

// 完全重写的神血特性检查函数
function applyGodFeatures() {
  console.log('===== 开始检查神血特性 =====');
  
  // 获取必要的DOM元素
  const godFeatureError = document.getElementById('godFeatureError');
  const godOther1Select = document.getElementById('godOther1');
  const godOther2Select = document.getElementById('godOther2');
  
  // 初始化返回值
  let bonus = { "体": 0, "力": 0, "技": 0, "敏": 0, "感": 0, "意": 0 };
  
  // 检查元素是否存在
  if (!godFeatureError) {
    console.error('错误: 未找到神血特性提示元素！');
    return { bonus, error: false };
  }
  
  if (!godOther1Select || !godOther2Select) {
    console.error('错误: 未找到神血特性选择框！');
    updateErrorMessage(godFeatureError, '界面元素加载失败，请刷新页面重试', true);
    return { bonus, error: false };
  }
  
  // 获取选择的特性
  const selectedGodOther1 = godOther1Select.value || '';
  const selectedGodOther2 = godOther2Select.value || '';
  
  console.log(`当前选择: 神血特性1="${selectedGodOther1}", 神血特性2="${selectedGodOther2}"`);
  
  // 获取特性数据
  const featuresData = bloodlineGodFeatureMap[currentMainBloodline] || bloodlineGodFeatureMap['default'];
  
  if (!featuresData || !featuresData.others || !Array.isArray(featuresData.others)) {
    console.error('错误: 特性数据不存在或格式错误');
    updateErrorMessage(godFeatureError, '神血特性数据加载失败，请刷新页面', true);
    return { bonus, error: false };
  }
  
  // 无选择时的处理
  if (!selectedGodOther1 && !selectedGodOther2) {
    hideErrorMessage(godFeatureError);
    console.log('无特性选择，隐藏提示');
    return { bonus, error: false };
  }
  
  // 获取特性部位的辅助函数
  const getPart = (featureName) => {
    if (!featureName) return null;
    const feature = featuresData.others.find(f => f.name === featureName);
    return feature ? feature.部位 : null;
  };
  
  // 获取部位信息
  const part1 = getPart(selectedGodOther1);
  const part2 = getPart(selectedGodOther2);
  
  // 获取特性详细信息
  const getFeatureInfo = (featureName) => {
    if (!featureName) return null;
    return featuresData.others.find(f => f.name === featureName);
  };
  
  // 获取特性信息
  const feature1 = getFeatureInfo(selectedGodOther1);
  const feature2 = getFeatureInfo(selectedGodOther2);
  
  console.log(`部位信息: 特性1=${part1}, 特性2=${part2}`);
  console.log(`特性信息: 特性1=${feature1?.name}, 特性2=${feature2?.name}`);
  
  // 重复部位检查
  if (part1 && part2 && part1 === part2) {
    updateErrorMessage(godFeatureError, `神血特性部位不能重复！当前选择了两个"${part1}"部位的特性：${feature1?.name} 和 ${feature2?.name}，请选择不同部位的特性`, true);
    console.log('检测到重复部位，返回错误');
    return { bonus: { "体": 0, "力": 0, "技": 0, "敏": 0, "感": 0, "意": 0 }, error: true };
  }
  
  // 错误检查与提示逻辑
  if (selectedGodOther1 && !part1) {
    updateErrorMessage(godFeatureError, `神血特性 "${selectedGodOther1}" 数据不完整`, true);
    return { bonus, error: false };
  }
  
  if (selectedGodOther2 && !part2) {
    updateErrorMessage(godFeatureError, `神血特性 "${selectedGodOther2}" 数据不完整`, true);
    return { bonus, error: false };
  }
  
  // 特性信息已经在前面定义
  
  // 显示选择信息，包含特性名称和前置要求
  if (feature1 && feature2) {
    let message = `已选择：`;
    message += `${feature1.name}(${part1})`;
    if (feature1.prerequisite) {
      message += `【前置：${feature1.prerequisite}】`;
    }
    message += ` 和 `;
    message += `${feature2.name}(${part2})`;
    if (feature2.prerequisite) {
      message += `【前置：${feature2.prerequisite}】`;
    }
    updateErrorMessage(godFeatureError, message, false);
  } else if (feature1) {
    let message = `已选择：${feature1.name}(${part1})`;
    if (feature1.prerequisite) {
      message += `【前置：${feature1.prerequisite}】`;
    }
    updateErrorMessage(godFeatureError, message, false);
  } else if (feature2) {
    let message = `已选择：${feature2.name}(${part2})`;
    if (feature2.prerequisite) {
      message += `【前置：${feature2.prerequisite}】`;
    }
    updateErrorMessage(godFeatureError, message, false);
  }
  
  // 计算属性加成
  [selectedGodOther1, selectedGodOther2].filter(Boolean).forEach(featureName => {
    const feature = featuresData.others.find(f => f.name === featureName);
    if (feature && feature.growth) {
      console.log(`应用特性加成: ${featureName}`, feature.growth);
      Object.keys(feature.growth).forEach(key => {
        if (bonus[key] !== undefined) {
          bonus[key] += feature.growth[key];
        }
      });
    }
  });
  
  console.log('神血特性检查完成，属性加成:', bonus);
  return { bonus, error: false };
}

// 计算属性
function calculateAttributes() {
  console.log('Calculating attributes...');
  if (!bloodlineAttributes) return;
  
  const mainBloodline = bloodlineAttributes[currentMainBloodline] || { [currentGender]: { "体": 0, "力": 0, "技": 0, "敏": 0, "感": 0, "意": 0 } };
  const secondaryBloodline = bloodlineAttributes[currentSecondaryBloodline] || { [currentGender]: { "体": 0, "力": 0, "技": 0, "敏": 0, "感": 0, "意": 0 } };
  
  const mainBase = mainBloodline[currentGender] || { "体": 0, "力": 0, "技": 0, "敏": 0, "感": 0, "意": 0 };
  const secondaryBase = secondaryBloodline[currentGender] || { "体": 0, "力": 0, "技": 0, "敏": 0, "感": 0, "意": 0 };
  
  // 计算混合属性
  let body = (mainBase["体"] * mainBloodlinePercentage + secondaryBase["体"] * secondaryBloodlinePercentage) / 100;
  let strength = (mainBase["力"] * mainBloodlinePercentage + secondaryBase["力"] * secondaryBloodlinePercentage) / 100;
  let skill = (mainBase["技"] * mainBloodlinePercentage + secondaryBase["技"] * secondaryBloodlinePercentage) / 100;
  let agility = (mainBase["敏"] * mainBloodlinePercentage + secondaryBase["敏"] * secondaryBloodlinePercentage) / 100;
  let perception = (mainBase["感"] * mainBloodlinePercentage + secondaryBase["感"] * secondaryBloodlinePercentage) / 100;
  let will = (mainBase["意"] * mainBloodlinePercentage + secondaryBase["意"] * secondaryBloodlinePercentage) / 100;
  
  // 应用所有神像加成
  Object.entries(godLevels).forEach(([godId, level]) => {
    if (level > 0 && godBonuses[godId] && godBonuses[godId][String(level)]) {
      const godBonus = godBonuses[godId][String(level)];
      if (godBonus["体"]) body += godBonus["体"];
      if (godBonus["力"]) strength += godBonus["力"];
      if (godBonus["技"]) skill += godBonus["技"];
      if (godBonus["敏"]) agility += godBonus["敏"];
      if (godBonus["感"]) perception += godBonus["感"];
      if (godBonus["意"]) will += godBonus["意"];
    }
  });
  
  // 获取选择的神血特性
  const godSkillSelect = document.getElementById('godSkill');
  const godOther1Select = document.getElementById('godOther1');
  const godOther2Select = document.getElementById('godOther2');
  
  const selectedGodSkill = godSkillSelect ? godSkillSelect.value : '';
  const selectedGodOther1 = godOther1Select ? godOther1Select.value : '';
  const selectedGodOther2 = godOther2Select ? godOther2Select.value : '';
  
  // 应用神血特性加成
  const featuresData = bloodlineGodFeatureMap[currentMainBloodline] || bloodlineGodFeatureMap['default'];
  
  // 应用神子之技加成
  if (selectedGodSkill && featuresData.skills) {
    const skillFeature = featuresData.skills.find(s => s.name === selectedGodSkill);
    if (skillFeature && skillFeature.growth) {
      console.log('Applying god skill bonus:', selectedGodSkill);
      // 应用成长加成
      if (skillFeature.growth["力"]) strength += skillFeature.growth["力"];
      if (skillFeature.growth["体"]) body += skillFeature.growth["体"];
      if (skillFeature.growth["技"]) skill += skillFeature.growth["技"];
      if (skillFeature.growth["敏"]) agility += skillFeature.growth["敏"];
      if (skillFeature.growth["感"]) perception += skillFeature.growth["感"];
      if (skillFeature.growth["意"]) will += skillFeature.growth["意"];
    }
  }
  
  // 内部函数已移至全局作用域，现在直接调用全局的applyGodFeatures函数
  
  // 应用神血特性加成
  const { bonus, error } = applyGodFeatures();
  if (!error) {
    body += bonus["体"];
    strength += bonus["力"];
    skill += bonus["技"];
    agility += bonus["敏"];
    perception += bonus["感"];
    will += bonus["意"];
  }
  
  // 创建属性对象
  const attributes = { perception, body, strength, skill, agility, will };
  
  // 记录神血特性加成后的属性值
  console.log('Attributes after god feature bonuses:', attributes);
  // 记录属性值，方便调试和跟踪颜色变化
  console.log('Calculated attributes for color tracking:', attributes);
  
  // 更新显示 - 带评级和颜色
  updateAttributeDisplay(bodyValueDisplay, body);
  updateAttributeDisplay(strengthValueDisplay, strength);
  updateAttributeDisplay(skillValueDisplay, skill);
  updateAttributeDisplay(agilityValueDisplay, agility);
  updateAttributeDisplay(perceptionValueDisplay, perception);
  updateAttributeDisplay(willValueDisplay, will);
  
  const total = body + strength + skill + agility + perception + will;
  if (totalValueDisplay) totalValueDisplay.textContent = total.toFixed(2);
  
  // 立即更新雷达图，确保颜色变化立即生效
  console.log('Updating radar chart immediately with new attributes...');
  updateSvgRadar(attributes);
  
  // 添加定时器确保渲染完成，防止延迟渲染导致颜色变化不明显
  setTimeout(() => {
    console.log('Forcing radar chart re-render to ensure color changes are visible');
    updateSvgRadar(attributes);
  }, 50);
}

// 更新单个属性显示，包含数值、评级和颜色
function updateAttributeDisplay(element, value) {
  if (!element) return;
  
  // 获取评级和颜色
  const { rating, color } = getRatingAndColor(value);
  
  // 设置数值内容
  element.textContent = value.toFixed(2);
  
  // 查找属性名称span元素（父元素的第一个子元素）
  const attributeNameSpan = element.parentElement?.firstElementChild;
  
  // 如果找到属性名称span，将评级显示在其后面
  if (attributeNameSpan) {
    // 检查是否已经有评级span，如果有则更新，没有则创建
    let ratingSpan = attributeNameSpan.nextElementSibling;
    if (!ratingSpan || !ratingSpan.classList.contains('attribute-rating')) {
      // 创建新的评级span
      ratingSpan = document.createElement('span');
      ratingSpan.className = 'attribute-rating';
      attributeNameSpan.after(ratingSpan);
    }
    
    // 设置评级内容和样式（紧挨着属性名称，不加括号）
    ratingSpan.textContent = rating;
    ratingSpan.style.color = color;
    ratingSpan.style.fontWeight = 'bold';
    // 移除左边距，让评级紧挨着属性名称
  }
  
  console.log(`Updated display for ${element.id}: value=${value.toFixed(2)}, rating=${rating}, color=${color}`);
}

// 全局变量 - 神像状态
let godLevels = {
  'palo': 0,
  'koneta': 0,
  'sainan': 0
};
// 神血特性选择
let selectedGodSkill = '';
let selectedGodOther1 = '';
let selectedGodOther2 = '';
let paloBtn, konetaBtn, sainanBtn;

// 添加事件监听器
function addEventListeners() {
  if (mainBloodlineSelect) {
    mainBloodlineSelect.addEventListener('change', function() {
      currentMainBloodline = this.value;
      // 主血脉变化时更新神血特性选项
      updateGodFeatureOptions();
      calculateAttributes();
      saveUserPreferences();
    });
  }
  
  if (secondaryBloodlineSelect) {
    secondaryBloodlineSelect.addEventListener('change', function() {
      currentSecondaryBloodline = this.value;
      calculateAttributes();
      saveUserPreferences();
    });
  }
  
  if (percentageSlider) {
    percentageSlider.addEventListener('input', function() {
      mainBloodlinePercentage = parseInt(this.value);
      secondaryBloodlinePercentage = 100 - mainBloodlinePercentage;
      
      if (mainPercentage) mainPercentage.textContent = mainBloodlinePercentage + '%';
      if (secondaryPercentage) secondaryPercentage.textContent = secondaryBloodlinePercentage + '%';
      
      if (secondaryBloodlineContainer) {
        if (secondaryBloodlinePercentage > 0) {
          secondaryBloodlineContainer.classList.remove('hidden');
        } else {
          secondaryBloodlineContainer.classList.add('hidden');
        }
      }
      
      calculateAttributes();
      saveUserPreferences();
    });
  }
  
  if (genderToggle) {
    genderToggle.addEventListener('click', function() {
      // 切换性别
      currentGender = currentGender === '女' ? '男' : '女';
      // 更新按钮样式
      this.classList.toggle('female', currentGender === '女');
      this.classList.toggle('male', currentGender === '男');
      // 更新按钮文本
      this.querySelector('span').textContent = currentGender === '女' ? '♀' : '♂';
      // 重新计算属性
      calculateAttributes();
      saveUserPreferences();
    });
  }
  
  // 添加神像按钮点击事件监听器
  const godButtons = [paloBtn, konetaBtn, sainanBtn];
  godButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', function() {
        const godId = this.getAttribute('data-god');
        handleGodButtonClick(godId, this);
      });
    }
  });
  
  // 监听神血特性选择变化
  const godSkillSelect = document.getElementById('godSkill');
  const godOther1Select = document.getElementById('godOther1');
  const godOther2Select = document.getElementById('godOther2');
  
  if (godSkillSelect) {
    godSkillSelect.addEventListener('change', function() {
      selectedGodSkill = this.value;
      console.log('神子之技变化为:', selectedGodSkill);
      calculateAttributes();
      saveUserPreferences();
    });
  }
  
  if (godOther1Select) {
    godOther1Select.addEventListener('change', function() {
      selectedGodOther1 = this.value;
      console.log('神血特性1变化为:', selectedGodOther1);
      calculateAttributes();
      saveUserPreferences();
    });
  }
  
  if (godOther2Select) {
    godOther2Select.addEventListener('change', function() {
      selectedGodOther2 = this.value;
      console.log('神血特性2变化为:', selectedGodOther2);
      calculateAttributes();
      saveUserPreferences();
    });
  }
}

// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM content loaded, initializing...');
  initialize();
  
  // 立即检查神血特性并显示提示信息
  setTimeout(() => {
    console.log('Initial god feature check');
    applyGodFeatures();
  }, 50);
  
  // 添加延迟确保雷达图完全初始化后再计算属性，使颜色变化立即生效
  setTimeout(() => {
    console.log('Delayed attribute recalculation for immediate color effect');
    calculateAttributes();
  }, 100);
});