# noumm
このREADMEは日本語及び英語で記述されています。
This README is written in Japanese and Englsh.

日付(DATE): 
2022/6/5(日)
Sunday, 6/5/2022

# 日本語(Japanese)
## 概要
noUmmは、無音のMP3を流し続けるシンプルなソフトウェアです。
音声信号を送り続ける必要がある場合に有用です。
HTMLベースのため、実行ファイルが実行できない環境でも利用することが可能です。
現在は、WindowsPCでの動作を想定して制作されています。
このリポジトリは、Github Pagesにて公開するために作成されました。

## 開発の背景
開発者のikimiti4408は学生です。
学校には無線でPCの画面を投影できるEPSONのプロジェクターがあります。
しかし、PCからプロジェクターに送った音声の最初の部分が途切れるという問題が発生しています。
仕様を調べたところ、音声信号がない時間がしばらくあるとこの問題が発生しているようでした。
そのため、音声信号を発生し続ける仕組みを作ろうと考えました。
MP3を流すだけでも改善しますが、流したい音を流す再生ソフトウェアと別のソフトウェアを開く必要がありました。
PCに慣れていない人でも簡単に使え、学校の制限に引っかからないようにHTMLにて作成しました。

## 使い方
index.htmlを開き、ボタンを押してONにするだけです。
そのままブラウザのタブは閉じず、いつも通り音を流してください。
音声信号を送り続けるため、無線の接続状況が不安定になる可能性があります。

## 開発の貢献
開発者のikimiti4408はプログラミング初心者です。
もしひどいコードを発見して"noUmm"の開発に貢献したいと思ったら、issueで優しく教えてください。
コードの安全性を学校に示すために、オープンソース化しMITライセンスで提供しています。
また、費用の節約のためGithub Pagesにて提供しています。
issueやPull Requestは大変嬉しいです。
しかし、ikimiti4408の個人開発を基本としているためそれを参考にしないことがあることはご承知ください。

# English(英語)
## About
"noUmm" is a simple software that plays the silent MP3.
It is useful when you need to keep sending an audio signal.
It is a system of HTML base, so you can use "noUmm" even if your computer cannot run executable files.
Now, it is made to work on Windows PCs.
This repository is to publish the system by Github Pages.

## Background of develop
The developer, ikimiti4408, is a high school student in Japan.
There are projectors of EPSON showing the screen of PCs by wireless in my school.
However, it is a problem that sound of the first few seconds which was sent from the PC to the projector don't exist.
I searched details of the problem, so I found that the problem may happen after there is a few seconds no audio signal time.
I wanted to make a system keeping sending an audio signal in order to solve the problem.
Though Only playing the MP3 improve the problem, we must run both an audio player software to play the MP3 and one which to play another MP3.
I made the software in HTML so that even people who aren't familiar with PCs can use it easily and my school cannot restrict to use it. 

## Way to use
Please open "index.html" and click the button to play the MP3.
Please keep opening the tab, then you can enjoy playing sounds.
Maybe your wireless connect will be unstable because your PC will keep sending an audio signal to your projector etc.

## Contribute to develop
The developer, ikimiti4408, is a beginner programmer.
If you find bad codes and want to contribute, please teach me kind.
It is a Opensource software under MIT License in order to show the codes to my school.
I provide it by Github Pages to save money.
If you write Issues or Pull Requests, I am happy.
But You should understand that I won't likely refer to what you send because base of the system is personal develop. 
