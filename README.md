# tetris
* 按键操作：  
  * 空格键为继续、暂停游戏  
  * 回车键为开始新游戏  
  * 方向键↓：加速方块下落速度  
  * 方向键→：使方块向右移动  
  * 方向键←：使方块向左移动  
  * 方向键↑：使方块变形  
* 每消除一行得一分
* 游戏难度每30S提高一次  
  * *具体时间由 1444行 timestop = window.setInterval(timequick, 30000)的参数 30000 决定 单位为毫秒*  
  * *具体提升的难度由 1402行的 time -= 10 决定 即 每次下落一格的时间减少10 毫秒*  
  * **注意  修改 1402行的 time -= 10 的同时 也要修改 1443行的 time += 10**
