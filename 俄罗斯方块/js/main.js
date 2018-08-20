var canvas = document.getElementById("tet");
var context = canvas.getContext('2d');
var c = document.getElementById("gl");
var ctx = c.getContext("2d");
var cannext= document.getElementById("next");
var connext = cannext.getContext("2d");
var a = new Array(20)
for (var i = 0; i < 20; i++) {
    a[i] = new Array(10)
}
var b = new Array(4)
for (var i = 0; i < 4; i++) {
    b[i] = new Array(4)
}
function resteb() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            b[i][j] = 0
        }
    }
}
var blo
var gl = 0
var pause=0
var play
var time = 500
var timestop
var lose
var lose2
var nextblock
function drawgl(text) {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = "100px Verdana";
    //创建渐变
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1", "red");
    //把他赋值给fillStyle
    ctx.fillStyle = gradient;
    ctx.fillText(text, 10, 100);
}
function newgame() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            a[i][j] = 0
        }
    }
    blo = getblock()
    getnextblock()
    blo.newx()
    drawgl(gl)
}
function getrandomint() {
    return Math.floor(Math.random() * 7)
}
function getblock() {
    var int = getrandomint()
   // int = 3
    switch (int) {
        case 0: {
            var p = new T()
            return p
        }
        case 1: {
            var p = new I()
            return p
        }
        case 2: {
            var p = new O()
            return p
        }
        case 3: {
            var p = new J()
            return p
        }
        case 4: {
            var p = new L()
            return p
        }
        case 5: {
            var p = new S()
            return p
        }
        case 6: {
            var p = new Z()
            return p
        }
    }
}
function getnextblock() {
    nextblock = getblock()
    switch (nextblock.name()) {
        case "T": {
            b[3][0] = 1
            b[3][1] = 1
            b[3][2] = 1
            b[2][1] = 1
            break
        }
        case "S": {
            b[3][0] = 6
            b[3][1] = 6
            b[2][2] = 6
            b[2][1] = 6
            break
        }
        case "Z": {
            b[2][0] = 7
            b[3][1] = 7
            b[3][2] = 7
            b[2][1] = 7
            break
        }
        case "O": {
            b[2][1] = 3
            b[1][1] = 3
            b[1][2] = 3
            b[2][2] = 3
            break
        }
        case "J": {
            b[1][0] = 4
            b[2][0] = 4
            b[1][1] = 4
            b[3][0] = 4
            break
        }
        case "I": {
            b[2][1] = 2
            b[2][0] = 2
            b[2][2] = 2
            b[2][3] = 2
            break
        }
        case "L": {
            b[1][0] = 5
            b[2][1] = 5
            b[3][1] = 5
            b[1][1] = 5
            break
        }
    }
}
function getnewblock() {
    isfull()
    var sh = nextblock
    resteb()
    getnextblock()   
    sh.newx()
    return sh
}
class T {
    name() {
        return "T"
    }
    newx() {
        if (a[1][5] == 0 && a[0][4] == 0 && a[1][4] == 0 && a[2][4] == 0) {
            a[0][4] = 1
            a[2][4] = 1
            a[1][4] = 1
            a[1][5] = 1
        }
        else {
            window.clearInterval(lose)
            window.clearInterval(lose2)
        }
        this.state = 0
        this.x = 4
        this.y = 1
    }
    rotate() {
        switch (this.state) {
            case 0: {
                if (this.x > 0 && a[this.y][this.x - 1] == 0) {
                    a[this.y][this.x - 1] = 1
                    a[this.y - 1][this.x] = 0
                    this.state = 1
                }
                break
            }
            case 1: {
                if (this.y > 0 && a[this.y - 1][this.x] == 0) {
                    a[this.y - 1][this.x] = 1
                    a[this.y][this.x + 1] = 0
                    this.state = 2
                }
                break
            }
            case 2: {
                if (this.x < 9 && a[this.y][this.x + 1] == 0) {
                    a[this.y][this.x + 1] = 1
                    a[this.y + 1][this.x] = 0
                    this.state = 3
                }
                break
            }
            case 3: {
                if (this.y < 19 && a[this.y + 1][this.x] == 0) {
                    a[this.y + 1][this.x] = 1
                    a[this.y][this.x - 1] = 0
                    this.state = 0
                }
                break
            }
        }
    }
    left() {
        switch (this.state) {
            case 0: {
                if (this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y - 1][this.x - 1] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y][this.x - 1] = 1
                    a[this.y - 1][this.x - 1] = 1
                    a[this.y + 1][this.x - 1] = 1
                    a[this.y][this.x + 1] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y - 1][this.x] = 0
                    this.x -= 1
                }
                break
            }
            case 1: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y][this.x - 2] = 1
                    a[this.y + 1][this.x - 1] = 1
                    a[this.y + 1][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    this.x -= 1
                }
                break
            }
            case 2: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0 && a[this.y - 1][this.x - 1] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y][this.x - 2] = 1
                    a[this.y - 1][this.x - 1] = 1
                    a[this.y + 1][this.x - 1] = 1
                    a[this.y][this.x] = 0
                    a[this.y - 1][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    this.x -= 1
                }
                break
            }
            case 3: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0 && a[this.y - 1][this.x - 1] == 0) {
                    a[this.y][this.x - 2] = 1
                    a[this.y - 1][this.x - 1] = 1
                    a[this.y][this.x + 1] = 0
                    a[this.y - 1][this.x] = 0
                    this.x -= 1
                }
                break
            }
        }
    }
    right() {
        switch (this.state) {
            case 0: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y - 1][this.x + 1] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y - 1][this.x + 1] = 1
                    a[this.y + 1][this.x + 1] = 1
                    a[this.y][this.x + 2] = 1
                    this.x += 1
                }
                break
            }
            case 1: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y][this.x + 2] = 1
                    a[this.y + 1][this.x + 1] = 1
                    a[this.y][this.x - 1] = 0
                    a[this.y + 1][this.x] = 0
                    this.x += 1
                }
                break
            }
            case 2: {
                if (this.x < 9 && a[this.y][this.x + 1] == 0 && a[this.y - 1][this.x + 1] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y][this.x - 1] = 0
                    a[this.y - 1][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y - 1][this.x + 1] = 1
                    a[this.y + 1][this.x + 1] = 1
                    a[this.y][this.x + 1] = 1
                    this.x += 1
                }
                break
            }
            case 3: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y - 1][this.x + 1] == 0) {
                    a[this.y][this.x + 2] = 1
                    a[this.y - 1][this.x + 1] = 1
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x - 1] = 0
                    this.x += 1
                }
                break
            }
        }
    }
    fill() {
        switch (this.state) {
            case 0: {
                if ((this.y < 18) && a[this.y + 2][this.x] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y + 2][this.x] = 1
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    a[this.y + 1][this.x + 1] = 1
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 1: {
                if (this.y < 18 && a[this.y + 2][this.x] == 0 && a[this.y + 1][this.x + 1] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y][this.x - 1] = 0
                    a[this.y][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    a[this.y + 1][this.x - 1] = 1
                    a[this.y + 1][this.x + 1] = 1
                    a[this.y + 2][this.x] = 1
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 2: {
                if (this.y < 18 && a[this.y + 2][this.x] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x - 1] = 0
                    a[this.y + 2][this.x] = 1
                    a[this.y + 1][this.x - 1] = 1
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 3: {
                if (this.y < 19 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 1][this.x] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y + 1][this.x - 1] = 1
                    a[this.y + 1][this.x] = 1
                    a[this.y + 1][this.x + 1] = 1
                    a[this.y][this.x - 1] = 0
                    a[this.y][this.x + 1] = 0
                    a[this.y - 1][this.x] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
        }
    }
}
class S {
    name() {
        return "S"
    }
    newx() {
        if (a[0][5] == 0 && a[0][4] == 0 && a[1][4] == 0 && a[1][3] == 0) {
            a[0][4] = 6
            a[0][5] = 6
            a[1][4] = 6
            a[1][3] = 6
        }
        else {
            window.clearInterval(lose)
            window.clearInterval(lose2)
        }
        this.state = 0
        this.x = 4
        this.y=0
    }
    rotate() {
        switch (this.state) {
            case 0: {
                if (this.y > 0 && a[this.y - 1][this.x] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y - 1][this.x] = 6
                    a[this.y + 1][this.x + 1] = 6
                    a[this.y + 1][this.x] = 0
                    a[this.y + 1][this.x - 1] = 0
                    this.state=1
                }
                break
            }
            case 1: {
                if (this.x > 0 && a[this.y + 1][this.x] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y + 1][this.x] = 6
                    a[this.y + 1][this.x - 1] = 6
                    a[this.y - 1][this.x] = 0
                    a[this.y + 1][this.x + 1] = 0
                    this.state = 0
                }
                if (this.x == 0 && a[this.y + 1][0] == 0 && a[this.y ][2] == 0) {
                    a[this.y + 1][0] = 6
                    a[this.y ][2] = 6
                    a[this.y - 1][0] = 0
                    a[this.y][0] = 0
                    this.x=1
                    this.state = 0
                }
                break
            }
        }
    }
    left() {
        switch (this.state) {
            case 0: {
                if (this.x > 1 && a[this.y][this.x - 1] == 0 && a[this.y + 1][this.x - 2] == 0) {
                    a[this.y][this.x - 1] = 6
                    a[this.y + 1][this.x - 2] = 6
                    a[this.y + 1][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    this.x -= 1
                }
                break
            }
            case 1: {
                if (this.x > 0 && a[this.y - 1][this.x - 1] == 0 && a[this.y][this.x - 1] == 0 && a[this.y + 1][this.x] == 0) {
                    a[this.y - 1][this.x - 1] = 6
                    a[this.y][this.x - 1] = 6
                    a[this.y + 1][this.x] = 6
                    a[this.y - 1][this.x] = 0
                    a[this.y + 1][this.x + 1] = 0
                    a[this.y][this.x + 1] = 0
                    this.x-=1
                }
                break
            }
        }
    }
    right() {
        switch (this.state) {
            case 0: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y][this.x + 2] = 6
                    a[this.y + 1][this.x + 1] = 6
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x - 1] = 0
                    this.x+=1
                }
                break
            }
            case 1: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y - 1][this.x + 1] == 0 && a[this.y + 1][this.x + 2] == 0) {
                    a[this.y][this.x + 2] = 6
                    a[this.y - 1][this.x + 1] = 6
                    a[this.y + 1][this.x + 2] = 6
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x + 1] = 0
                    this.x+=1
                }
                break
            }
        }
    }
    fill() {
        switch (this.state) {
            case 0: {
                if (this.y < 18 && a[this.y + 2][this.x] == 0 && a[this.y + 2][this.x - 1] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y + 2][this.x] = 6
                    a[this.y + 2][this.x - 1] = 6
                    a[this.y + 1][this.x + 1] = 6
                    a[this.y][this.x + 1] = 0
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x - 1] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 1: {
                if (this.y < 18 && a[this.y + 1][this.x] == 0 && a[this.y + 2][this.x + 1] == 0) {
                    a[this.y + 1][this.x] = 6
                    a[this.y + 2][this.x + 1] = 6
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    this.y+=1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
        }
    }
}
class Z {
    name() {
        return "Z"
    }
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][5] == 0 && a[1][6] == 0) {
            a[0][5] = 7
            a[0][4] = 7
            a[1][5] = 7
            a[1][6] = 7
        }
        else {
            window.clearInterval(lose)
            window.clearInterval(lose2)
        }
        this.state = 0
        this.x = 5
        this.y=0
    }
    rotate() {
        switch (this.state) {
            case 0: {
                if (this.y > 0 && a[this.y - 1][this.x] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y - 1][this.x] = 7
                    a[this.y + 1][this.x - 1] = 7
                    a[this.y + 1][this.x] = 0
                    a[this.y + 1][this.x + 1] = 0
                    this.state=1
                }
                break
            }
            case 1: {
                if (this.x<9&&a[this.y+1][this.x]==0&&a[this.y+1][this.x+1]==0) {
                    a[this.y - 1][this.x] = 0
                    a[this.y + 1][this.x - 1] = 0
                    a[this.y + 1][this.x] = 7
                    a[this.y + 1][this.x + 1] = 7
                    this.state = 0
                }
                if (this.x == 9 && a[this.y + 1][9] == 0 && a[this.y][7] == 0) {
                    a[this.y][9] = 0
                    a[this.y -1][9] = 0
                    a[this.y + 1][9] = 7
                    a[this.y][7] = 7
                    this.x=8
                    this.state = 0
                }
                break
            }
        }
    }
    left() {
        switch (this.state) {
            case 0: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y][this.x - 2] = 7
                    a[this.y + 1][this.x - 1] = 7
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x + 1] = 0
                    this.x-=1
                }
                break
            }
            case 1: {
                if (this.x > 1 && a[this.y - 1][this.x - 1] == 0 && a[this.y][this.x - 2] == 0 && a[this.y + 1][this.x - 2] == 0) {
                    a[this.y - 1][this.x - 1] = 7
                    a[this.y][this.x - 2] = 7
                    a[this.y + 1][this.x - 2] = 7
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x - 1] = 0
                    this.x-=1
                }
                break
            }
        }
    }
    right() {
        switch (this.state) {
            case 0: {
                if (this.x < 8 && a[this.y][this.x + 1] == 0 && a[this.y + 1][this.x + 2] == 0) {
                    a[this.y][this.x + 1] = 7
                    a[this.y + 1][this.x + 2] = 7
                    a[this.y][this.x - 1] = 0
                    a[this.y + 1][this.x] = 0
                    this.x+=1
                }
                break
            }
            case 1: {
                if (this.x < 9 && a[this.y - 1][this.x + 1] == 0 && a[this.y][this.x + 1] == 0 && a[this.y + 1][this.x] == 0) {
                    a[this.y - 1][this.x + 1] = 7
                    a[this.y][this.x + 1] = 7
                    a[this.y + 1][this.x] = 7
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x - 1] = 0
                    a[this.y + 1][this.x - 1] = 0
                    this.x+=1
                }
                break
            }
        }
    }
    fill() {
        switch (this.state) {
            case 0: {
                if (this.y < 18 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 2][this.x + 1] == 0 && a[this.y + 2][this.x] == 0) {
                    a[this.y + 1][this.x - 1] = 7
                    a[this.y + 2][this.x + 1] = 7
                    a[this.y + 2][this.x] = 7
                    a[this.y][this.x - 1] = 0
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x + 1] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 1: {
                if (this.y<18&&a[this.y+2][this.x-1]==0&&a[this.y+1][this.x]==0) {
                    a[this.y + 2][this.x - 1] = 7
                    a[this.y + 1][this.x] = 7
                    a[this.y][this.x - 1] = 0
                    a[this.y - 1][this.x] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }  
        }
    }
}
class O {
    name() {
        return "O"
    }
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][4] == 0 && a[1][5] == 0) {
            a[0][4] = 3
            a[0][5] = 3
            a[1][4] = 3
            a[1][5] = 3
        }
        else {
            window.clearInterval(lose)
            window.clearInterval(lose2)
        }
        this.x = 4
        this.y = 0
    }
    rotate() {

    }
    left() {
        if (this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y + 1][this.x - 1] == 0) {
            a[this.y][this.x - 1] = 3
            a[this.y + 1][this.x - 1] = 3
            a[this.y][this.x + 1] = 0
            a[this.y + 1][this.x + 1] = 0
            this.x-=1
        }
    }
    right() {
        if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y + 1][this.x + 2] == 0) {
            a[this.y][this.x + 2] = 3
            a[this.y + 1][this.x + 2] = 3
            a[this.y][this.x] = 0
            a[this.y + 1][this.x] = 0
            this.x += 1
        }
    }
    fill() {
        if (this.y < 18 && a[this.y + 2][this.x] == 0 && a[this.y + 2][this.x + 1] == 0) {
            a[this.y + 2][this.x] = 3
            a[this.y + 2][this.x + 1] = 3
            a[this.y][this.x] = 0
            a[this.y][this.x + 1] = 0
            this.y += 1
            return this
        }
        else {
            return getnewblock()
        }
    }
}
class J {
    name() {
        return "J"
    }
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][4] == 0 && a[2][4] == 0) {
            a[0][4] = 4
            a[0][5] = 4
            a[1][4] = 4
            a[2][4] = 4
        }
        else {
            window.clearInterval(lose)
            window.clearInterval(lose2)
        }
        this.state = 0
        this.y = 0
        this.x = 4
    }
    rotate() {
        switch (this.state) {
            case 0: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0 && a[this.y][this.x - 1] == 0) {
                    a[this.y][this.x - 2] = 4
                    a[this.y][this.x - 1] =4
                    a[this.y][this.x + 1] = 0
                    a[this.y + 2][this.x] = 0
                    this.state=1
                }
                if (this.x == 1 && a[this.y][0] == 0 && a[this.y + 1][2] == 0) {
                    a[this.y][0] = 4
                    a[this.y + 1][2] = 4
                    a[this.y + 1][1] = 0
                    a[this.y + 2][1] = 0
                    this.x=2
                    this.state=1
                }
                if (this.x == 0 && a[this.y][2] == 0 && a[this.y + 1][2] == 0) {
                    a[this.y][2] = 4
                    a[this.y + 1][2] = 4
                    a[this.y + 1][0] = 0
                    a[this.y + 2][0] = 0
                    this.x = 2
                    this.state = 1
                }
                break
            }
            case 1: {
                if (this.y > 1 && a[this.y - 1][this.x] == 0 && a[this.y - 2][this.x] == 0) {
                    a[this.y - 1][this.x] = 4
                    a[this.y - 2][this.x] = 4
                    a[this.y + 1][this.x] = 0
                    a[this.y][this.x - 2] = 0
                    this.state=2
                }
                break
            }
            case 2: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y][this.x + 1] == 0) {
                    a[this.y][this.x + 1] = 4
                    a[this.y][this.x + 2]=4
                    a[this.y - 2][this.x] = 0
                    a[this.y][this.x - 1] = 0
                    this.state=3
                }
                if (this.x == 8 && a[this.y][9] == 0 &&a[ this.y - 1][7] == 0) {
                    a[this.y][9] = 4
                    a[this.y - 1][7] = 4
                    a[this.y - 1][8] = 0
                    a[this.y - 2][8] = 0
                    this.x=7
                    this.state=3
                }
                if (this.x == 9 && a[this.y][7] == 0 && a[this.y - 1][7] == 0) {
                    a[this.y][7] = 4
                    a[this.y - 1][7] = 4
                    a[this.y - 1][9] = 0
                    a[this.y - 2][9] = 0
                    this.x = 7
                    this.state = 3
                }
                break                
            }
            case 3: {
                if (this.y < 18 && a[this.y + 1][this.x] == 0 && a[this.y + 2][this.x] == 0) {
                    a[this.y + 1][this.x] = 4
                    a[this.y + 2][this.x] = 4
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x + 2] = 0
                    this.state=0
                }
                break
            }
        }
    }
    left() {
        switch (this.state) {
            case 0: {
                if (this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 2][this.x - 1] == 0) {
                    a[this.y][this.x - 1] = 4
                    a[this.y + 1][this.x - 1] = 4
                    a[this.y + 2][this.x - 1] = 4
                    a[this.y + 2][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    this.x -= 1
                }
                break
            }
            case 1: {
                if (this.x > 2 && a[this.y][this.x - 3] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y][this.x - 3] = 4
                    a[this.y + 1][this.x - 1] = 4
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    this.x-=1
                }
                break
            }
            case 2: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0 && a[this.y - 1][this.x - 1] == 0 && a[this.y - 2][this.x - 1] == 0) {
                    a[this.y][this.x - 2] = 4
                    a[this.y - 1][this.x - 1] = 4
                    a[this.y - 2][this.x - 1] = 4
                    a[this.y][this.x] = 0
                    a[this.y-1][this.x] = 0
                    a[this.y-2][this.x] = 0
                    this.x-=1
                }
                break
            }
            case 3: {
                if (this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y - 1][this.x-1] == 0) {
                    a[this.y][this.x - 1] = 4
                    a[this.y - 1][this.x-1] = 4
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x + 2] = 0
                    this.x-=1
                }
                break
            }
        }
    }
    right() {
        switch (this.state) {
            case 0: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y + 1][this.x + 1] == 0 && a[this.y + 2][this.x + 1] == 0) {
                    a[this.y][this.x + 2] = 4
                    a[this.y + 1][this.x + 1] = 4
                    a[this.y + 2][this.x + 1] = 4
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    this.x+=1
                }
                break
            }
            case 1: {
                if (this.x < 9 && a[this.y][this.x + 1] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y][this.x + 1] = 4
                    a[this.y + 1][this.x + 1] = 4
                    a[this.y][this.x - 2] = 0
                    a[this.y+1][this.x]=0
                    this.x+=1
                }
                break
            }
            case 2: {
                if (this.x < 9 && a[this.y][this.x + 1] == 0 && a[this.y - 1][this.x + 1] == 0 && a[this.y - 2][this.x + 1] == 0) {
                    a[this.y][this.x + 1] = 4
                    a[this.y - 1][this.x + 1] = 4
                    a[this.y - 2][this.x + 1] = 4
                    a[this.y][this.x - 1] = 0
                    a[this.y - 1][this.x] = 0
                    a[this.y - 2][this.x] = 0
                    this.x+=1
                }
                break
            }
            case 3: {
                if (this.x < 7 && a[this.y][this.x + 3] == 0 && a[this.y - 1][this.x + 1] == 0) {
                    a[this.y][this.x + 3] = 4
                    a[this.y - 1][this.x + 1] = 4
                    a[this.y][this.x] = 0
                    a[this.y - 1][this.x] = 0
                    this.x+=1
                }
                break
            }
        }
    }
    fill() {
        switch (this.state) {
            case 0: {
                if (this.y < 17 && a[this.y + 3][this.x] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y + 3][this.x] = 4
                    a[this.y + 1][this.x + 1] = 4
                    a[this.y][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 1: {
                if (this.y < 18 && a[this.y + 2][this.x] == 0 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 1][this.x - 2] == 0) {
                    a[this.y + 2][this.x] = 4
                    a[this.y + 1][this.x - 1] = 4
                    a[this.y + 1][this.x - 2] = 4
                    a[this.y][this.x] = 0
                    a[this.y][this.x - 1] = 0
                    a[this.y][this.x - 2] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 2: {
                if (this.y < 19 && a[this.y + 1][this.x] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y + 1][this.x - 1] = 4
                    a[this.y + 1][this.x] = 4
                    a[this.y][this.x - 1] = 0
                    a[this.y - 2][this.x] = 0
                    this.y+=1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 3: {
                if (this.y<19&&a[this.y+1][this.x]==0&&a[this.y+1][this.x+1]==0&&a[this.y+1][this.x+2]==0) {
                    a[this.y + 1][this.x] = 4
                    a[this.y + 1][this.x + 1] = 4
                    a[this.y + 1][this.x + 2] = 4
                    a[this.y - 1][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    a[this.y][this.x + 2] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
        }
    }
}
class I {
    name() {
        return "I"
    }
    newx() {
        for (var i = 3; i <= 6; i++) {
            if (a[0][i] == 0) {
                a[0][i] = 2
            }
            else {
                window.clearInterval(lose)
                window.clearInterval(lose2)
            }
        }
        this.state = 0
        this.y = 0
        this.x = 4
    }
    rotate() {
        switch (this.state) {
            case 0: {
                if (this.y < 17 && a[this.y + 1][this.x] == 0 && a[this.y + 2][this.x] == 0 && a[this.y + 3][this.x] == 0) {
                    a[this.y + 1][this.x] = 2
                    a[this.y + 2][this.x] = 2
                    a[this.y + 3][this.x] = 2
                    a[this.y][this.x - 1] = 0
                    a[this.y][this.x + 1] = 0
                    a[this.y][this.x + 2] = 0
                    this.state = 1
                }
                break
            }
            case 1: {
                if (this.x < 8 && this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y][this.x - 1] == 0 && a[this.y][this.x + 1] == 0 && a[this.y][this.x + 2] == 0) {
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    a[this.y + 3][this.x] = 0
                    a[this.y][this.x - 1] = 2
                    a[this.y][this.x + 1] = 2
                    a[this.y][this.x + 2] = 2
                    this.state = 0
                    break
                }
                if (this.x == 0 && a[this.y][this.x + 1] == 0 && a[this.y][this.x + 2] == 0 && a[this.y][this.x + 3] == 0) {
                    a[this.y][this.x + 1] = 2
                    a[this.y][this.x + 2] = 2
                    a[this.y][this.x + 3] = 2
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    a[this.y + 3][this.x] = 0
                    this.x = 1
                    this.state = 0
                    break
                }
                if (this.x == 8 && a[this.y][this.x + 1] == 0 && a[this.y][this.x - 2] == 0 && a[this.y][this.x - 1] == 0) {
                    a[this.y][this.x + 1] = 2
                    a[this.y][this.x - 2] = 2
                    a[this.y][this.x - 1] = 2
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    a[this.y + 3][this.x] = 0
                    this.x = 7
                    this.state = 0
                    break
                }
                if (this.x == 9 && a[this.y][this.x - 3] == 0 && a[this.y][this.x - 2] == 0 && a[this.y][this.x - 1] == 0) {
                    a[this.y][this.x - 3] = 2
                    a[this.y][this.x - 2] = 2
                    a[this.y][this.x - 1] = 2
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    a[this.y + 3][this.x] = 0
                    this.x = 7
                    this.state = 0
                    break
                }
            }
        }

    }
    left() {
        switch (this.state) {
            case 0: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0) {
                    a[this.y][this.x - 2] = 2
                    a[this.y][this.x + 2] = 0
                    this.x -= 1
                }
                break
            }
            case 1: {
                if (this.x > 0 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 2][this.x - 1] == 0 && a[this.y + 3][this.x - 1] == 0) {
                    a[this.y + 1][this.x - 1] = 2
                    a[this.y + 2][this.x - 1] = 2
                    a[this.y + 3][this.x - 1] = 2
                    a[this.y][this.x - 1] = 2
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    a[this.y + 3][this.x] = 0
                    this.x -= 1
                }
                break
            }
        }
    }
    right() {
        switch (this.state) {
            case 0: {
                if (this.x < 17 && a[this.y][this.x + 3] == 0) {
                    a[this.y][this.x - 1] = 0
                    a[this.y][this.x + 3] = 2
                    this.x += 1
                }
                break
            }
            case 1: {
                if (this.x < 19 && a[this.y + 1][this.x + 1] == 0 && a[this.y + 2][this.x + 1] == 0 && a[this.y + 3][this.x + 1] == 0) {
                    a[this.y + 1][this.x + 1] = 2
                    a[this.y + 2][this.x + 1] = 2
                    a[this.y + 3][this.x + 1] = 2
                    a[this.y][this.x + 1] = 2
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    a[this.y + 3][this.x] = 0
                    this.x += 1
                }
                break
            }
        }
    }
    fill() {
        switch (this.state) {
            case 0: {
                if (this.y < 19 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 1][this.x] == 0 && a[this.y + 1][this.x + 1] == 0 && a[this.y + 1][this.x + 2] == 0) {
                    a[this.y + 1][this.x - 1] = 2
                    a[this.y + 1][this.x] = 2
                    a[this.y + 1][this.x + 1] = 2
                    a[this.y + 1][this.x + 2] = 2
                    a[this.y][this.x] = 0
                    a[this.y][this.x - 1] = 0
                    a[this.y][this.x + 1] = 0
                    a[this.y][this.x + 2] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 1: {
                if (this.y < 16 && a[this.y + 4][this.x] == 0) {
                    a[this.y + 4][this.x] = 2
                    a[this.y][this.x] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
        }
    }
}
class L {
    name() {
        return "L"
    }
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][5] == 0 && a[2][5] == 0) {
            a[0][4] = 5
            a[0][5] = 5
            a[1][5] = 5
            a[2][5] = 5
        }
        else {
            window.clearInterval(lose)
            window.clearInterval(lose2)
        }
        this.state = 0
        this.y = 0
        this.x = 5
    }
    rotate() {
        switch (this.state) {
            case 0: {
                if (this.y > 0 &&this.x!=1&& a[this.y - 1][this.x] == 0 && a[this.y][this.x - 2] == 0) {
                    a[this.y - 1][this.x] = 5
                    a[this.y][this.x - 2] = 5
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    this.state=1
                }
                if (this.y > 0 && this.x == 1 && a[this.y - 1][2] == 0 && a[this.y][2] == 0) {
                    a[this.y - 1][2] = 5
                    a[this.y][2] = 5
                    a[this.y + 1][1] = 0
                    a[this.y + 2][1] = 0
                    this.x=2
                    this.state = 1
                }
                break
            }
            case 1: {
                if (this.y > 1 &&this.x<9&& a[this.y - 2][this.x] == 0&& a[this.y][this.x + 1] == 0) {
                    a[this.y - 2][this.x] = 5
                    a[this.y][this.x + 1] = 5
                    a[this.y][this.x - 2] = 0
                    a[this.y][this.x - 1] = 0
                    this.state=2
                }
                if (this.y > 1 && this.x == 9  && a[this.y-1][8] == 0&&a[this.y-2][8]==0) {
                    a[this.y - 2][8] = 5
                    a[this.y-1][8] = 5
                    a[this.y][7] = 0
                    a[this.y - 1][9] = 0
                    this.x=8
                    this.state = 2
                }
                break
            }
            case 2: {
                if (this.y < 19 && this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y + 1][this.x] == 0) {
                    a[this.y][this.x + 2] = 5
                    a[this.y + 1][this.x] = 5
                    a[this.y - 1][this.x] = 0
                    a[this.y - 2][this.x] = 0
                    this.state=3
                }
                if (this.y < 19 && this.x == 8 && a[this.y][7] == 0 && a[this.y + 1][7] == 0) {
                    a[this.y][7] = 5
                    a[this.y + 1][7] = 5
                    a[this.y - 1][8] = 0
                    a[this.y - 2][8] = 0
                    this.x=7
                    this.state = 3
                }
                break
            }
            case 3: {
                if (this.y < 18 && this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y + 2][this.x] == 0) {
                    a[this.y][this.x - 1] = 5
                    a[this.y + 2][this.x] = 5
                    a[this.y][this.x + 1] = 0
                    a[this.y][this.x + 2] = 0
                    this.state=0
                }
                if (this.y < 18 && this.x ==0 && a[this.y+1][ 1] == 0 && a[this.y + 2][1] == 0) {
                    a[this.y+1][1] = 5
                    a[this.y + 2][1] = 5
                    a[this.y+1][0] = 0
                    a[this.y][2] = 0
                    this.x=1
                    this.state = 0
                }
                break
            }
        }

    }
    left() {
        switch (this.state) {
            case 0: {
                if (this.x > 1 && a[this.y][this.x - 2] == 0 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 2][this.x - 1] == 0) {
                    a[this.y][this.x - 2] = 5
                    a[this.y + 1][this.x - 1] = 5
                    a[this.y + 2][this.x - 1] = 5
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    this.x-=1
                }
                break
            }
            case 1: {
                if (this.x > 2 && a[this.y][this.x - 3] == 0 && a[this.y - 1][this.x - 1] == 0) {
                    a[this.y][this.x - 3] = 5
                    a[this.y - 1][this.x - 1] = 5
                    a[this.y][this.x] = 0
                    a[this.y - 1][this.x] = 0
                    this.x-=1
                }
                break
            }
            case 2: {
                if (this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y - 1][this.x - 1] == 0 && a[this.y - 2][this.x - 1] == 0) {
                    a[this.y][this.x - 1] = 5
                    a[this.y - 1][this.x - 1] = 5
                    a[this.y - 2][this.x - 1] = 5
                    a[this.y - 1][this.x] = 0
                    a[this.y - 2][this.x] = 0
                    a[this.y][this.x + 1] = 0
                    this.x-=1
                }
                break
            }
            case 3: {
                if (this.x > 0 && a[this.y][this.x - 1] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y][this.x - 1] = 5
                    a[this.y + 1][this.x - 1] = 5
                    a[this.y + 1][this.x] = 0
                    a[this.y][this.x + 2] = 0
                    this.x-=1
                }
                break
            }
        }
    }
    right() {
        switch (this.state) {
            case 0: {
                if (this.x < 9 && a[this.y][this.x + 1] == 0 && a[this.y + 1][this.x + 1] == 0 && a[this.y + 2][this.x + 1] == 0) {
                    a[this.y][this.x + 1] = 5
                    a[this.y + 1][this.x + 1] = 5
                    a[this.y + 2][this.x + 1] = 5
                    a[this.y][this.x - 1] = 0
                    a[this.y + 1][this.x] = 0
                    a[this.y + 2][this.x] = 0
                    this.x+=1
                }
                break
            }
            case 1: {
                if (this.x < 9 && a[this.y][this.x + 1] == 0 && a[this.y - 1][this.x + 1] == 0) {
                    a[this.y][this.x + 1] = 5
                    a[this.y - 1][this.x + 1] = 5
                    a[this.y][this.x - 2] = 0
                    a[this.y - 1][this.x] = 0
                    this.x+=1
                }
                break
            }
            case 2: {
                if (this.x < 8 && a[this.y][this.x + 2] == 0 && a[this.y - 1][this.x + 1] == 0 && a[this.y - 2][this.x + 1] == 0) {
                    a[this.y][this.x + 2] = 5
                    a[this.y - 1][this.x + 1] = 5
                    a[this.y - 2][this.x + 1] = 5
                    a[this.y][this.x] = 0
                    a[this.y-1][this.x] = 0
                    a[this.y - 2][this.x] = 0
                    this.x+=1
                }
                break
            }
            case 3: {
                if (this.x < 7 && a[this.y][this.x + 3] == 0 && a[this.y + 1][this.x + 1] == 0) {
                    a[this.y][this.x + 3] = 5
                    a[this.y + 1][this.x + 1] = 5
                    a[this.y][this.x] = 0
                    a[this.y + 1][this.x] = 0
                    this.x+=1
                }
                break
            }
        }
    }
    fill() {
        switch (this.state) {
            case 0: {
                if (this.y < 17 && a[this.y + 3][this.x] == 0 && a[this.y + 1][this.x - 1] == 0) {
                    a[this.y + 3][this.x] = 5
                    a[this.y + 1][this.x - 1] = 5
                    a[this.y][this.x] = 0
                    a[this.y][this.x - 1] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 1: {
                if (this.y < 19 && a[this.y + 1][this.x] == 0 && a[this.y + 1][this.x - 1] == 0 && a[this.y + 1][this.x - 2] == 0) {
                    a[this.y + 1][this.x] = 5
                    a[this.y + 1][this.x - 1] = 5
                    a[this.y + 1][this.x - 2] = 5
                    a[this.y][this.x - 2] = 0
                    a[this.y][this.x - 1] = 0
                    a[this.y - 1][this.x] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 2: {
                if (this.y<19&&a[this.y+1][this.x]==0&&a[this.y+1][this.x+1]==0) {
                    a[this.y + 1][this.x] = 5
                    a[this.y + 1][this.x + 1] = 5
                    a[this.y][this.x + 1] = 0
                    a[this.y - 2][this.x] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break
            }
            case 3: {
                if (this.y<18&&a[this.y+2][this.x]==0&&a[this.y+1][this.x+1]==0&&a[this.y+1][this.x+2]==0) {
                    a[this.y + 2][this.x] = 5
                    a[this.y + 1][this.x + 1] = 5
                    a[this.y + 1][this.x + 2] = 5
                    a[this.y][this.x] = 0
                    a[this.y][this.x+1] = 0
                    a[this.y][this.x + 2] = 0
                    this.y += 1
                    return this
                }
                else {
                    return getnewblock()
                }
                break  
            }
        }
    }
}
function isfull() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            if (a[i][j] == 0) {
                break
            }
        }
        if (j == 10) {
            gl+=1
            clearline(i)
            drawgl(gl)
        }
    }
}
function fillline(i) {
    for (var j = i; j > 0; j--) {
        for (var q = 0; q < 10; q++) {
            a[j][q] = a[j - 1][q]
        }
    }
}
function clearline(i) {
    for (var j = 0; j < 10; j++) {
        a[i][j] = 0
    }
    fillline(i)
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";  //画布的填充色
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            if (a[i][j] == 1) { //T
                context.fillStyle = "purple";  //画布的填充色
                context.fillRect(j * canvas.height / 20, i * canvas.width / 10, canvas.height / 20, canvas.width / 10);
            }
            if (a[i][j] == 2) {   //I
                context.fillStyle = "cyan";  //画布的填充色
                context.fillRect(j * canvas.height / 20, i * canvas.width / 10, canvas.height / 20, canvas.width / 10);
            }
            if (a[i][j] == 3) {   //O
                context.fillStyle = "yellow";  //画布的填充色
                context.fillRect(j * canvas.height / 20, i * canvas.width / 10, canvas.height / 20, canvas.width / 10);
            }
            if (a[i][j] == 4) {   //J
                context.fillStyle = "blue";  //画布的填充色
                context.fillRect(j * canvas.height / 20, i * canvas.width / 10, canvas.height / 20, canvas.width / 10);
            }
            if (a[i][j] == 5) {   //L
                context.fillStyle = "orange";  //画布的填充色
                context.fillRect(j * canvas.height / 20, i * canvas.width / 10, canvas.height / 20, canvas.width / 10);
            }
            if (a[i][j] == 6) {   //S
                context.fillStyle = "green";  //画布的填充色
                context.fillRect(j * canvas.height / 20, i * canvas.width / 10, canvas.height / 20, canvas.width / 10);
            }
            if (a[i][j] == 7) {   //Z
                context.fillStyle = "red";  //画布的填充色
                context.fillRect(j * canvas.height / 20, i * canvas.width / 10, canvas.height / 20, canvas.width / 10);
            }
        }
    }
}
function draw2() {
    connext.clearRect(0, 0, cannext.width, cannext.height);
    connext.fillStyle = "black";  //画布的填充色
    connext.fillRect(0, 0, cannext.width, cannext.height);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (b[i][j] == 1) { //T
                connext.fillStyle = "purple";  //画布的填充色
                connext.fillRect(j * cannext.height / 4, i * cannext.width / 4, cannext.height / 4, cannext.width / 4);
            }
            if (b[i][j] == 2) {   //I
                connext.fillStyle = "cyan";  //画布的填充色
                connext.fillRect(j * cannext.height / 4, i * cannext.width / 4, cannext.height / 4, cannext.width / 4);
            }
            if (b[i][j] == 3) {   //O
                connext.fillStyle = "yellow";  //画布的填充色
                connext.fillRect(j * cannext.height / 4, i * cannext.width / 4, cannext.height / 4, cannext.width / 4);
            }
            if (b[i][j] == 4) {   //J
                connext.fillStyle = "blue";  //画布的填充色
                connext.fillRect(j * cannext.height / 4, i * cannext.width / 4, cannext.height / 4, cannext.width / 4);
            }
            if (b[i][j] == 5) {   //L
                connext.fillStyle = "orange";  //画布的填充色
                connext.fillRect(j * cannext.height / 4, i * cannext.width / 4, cannext.height / 4, cannext.width / 4);
            }
            if (b[i][j] == 6) {   //S
                connext.fillStyle = "green";  //画布的填充色
                connext.fillRect(j * cannext.height / 4, i * cannext.width / 4, cannext.height / 4, cannext.width / 4);
            }
            if (b[i][j] == 7) {   //Z
                connext.fillStyle = "red";  //画布的填充色
                connext.fillRect(j * cannext.height / 4, i * cannext.width / 4, cannext.height / 4, cannext.width / 4);
            }
        }
    }
}
function timefill() {
    blo = blo.fill()
}
function quick() {
    pause = window.setInterval(timefill, time)
    play = pause
}
function timequick() {   //加速
    time -= 10
    window.clearInterval(pause)
    pause = window.setInterval(timefill, time)
    play = pause
}
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e) {
        switch (e.keyCode) {
            case 37: {//左方向键
                if (play == pause) {
                    blo.left()
                }
                break
            }
            case 38: {//上方向键
                if (play == pause) {
                    blo.rotate()
                }
                break
            }
            case 39: {//右方向键
                if (play == pause) {
                    blo.right()
                }
                break
            }
            case 40: {//下方向键
                if (play == pause) {
                    timefill()
                }
                break
            }
            case 32: {//空格键
                if (play == pause) {
                    window.clearInterval(pause)
                    window.clearInterval(timestop)
                    pause=0
                }
                else {
                    quick()
                    time += 10
                    timestop = window.setInterval(timequick, 30000) //每30秒加速一次 
                }
                break
            }
            case 13: {//回车键
                location.reload(true)  
            }
        }
    }
}
newgame()
lose = window.setInterval(draw, 1)
lose2 = window.setInterval(draw2, 1)