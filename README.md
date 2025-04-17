# 🥁 虚拟架子鼓 (Drum Kit)

这是一个简单的 Web 应用程序，模拟了一个基本的架子鼓。用户可以通过点击屏幕上的按钮或者按下键盘上对应的按键来触发不同的鼓声。

## ✨ 功能

- **交互式按钮**: 页面上为每个鼓件（Tom 1, Tom 2, Tom 3, Tom 4, Snare, Crash, Kick）提供了一个按钮。
- **键盘支持**: 支持通过键盘按键 (w, a, s, d, j, k, l) 来触发相应的鼓声。
- **声音播放**: 点击按钮或按下键盘时会播放对应的 `.mp3` 鼓声音效。
- **视觉反馈**: 按下按钮或键盘时，对应的按钮会有短暂的视觉高亮效果。

## 🛠️ 技术栈

- HTML
- CSS
- JavaScript (原生)

## 🚀 如何运行

1.  克隆或下载此仓库。
2.  在你的浏览器中直接打开 `index.html` 文件。

## 📂 文件结构

```
.
├── images/         # 存放按钮背景图片
│   ├── crash.png
│   ├── kick.png
│   ├── snare.png
│   ├── tom1.png
│   ├── tom2.png
│   ├── tom3.png
│   └── tom4.png
├── sounds/         # 存放鼓声音频文件
│   ├── crash.mp3
│   ├── kick-bass.mp3
│   ├── snare.mp3
│   ├── tom-1.mp3
│   ├── tom-2.mp3
│   ├── tom-3.mp3
│   └── tom-4.mp3
├── index.html      # 主要的 HTML 结构文件
├── index.js        # 处理交互逻辑和声音播放的 JavaScript 文件
└── styles.css      # 页面的样式文件
```

---

_基于 Udemy 课程项目创建_
