var canvas = document.getElementById("tet");
var context = canvas.getContext('2d');
var a = new Array(20)
for (var i = 0; i < 20; i++) {
    a[i] = new Array(10)
}
var blo
function newgame() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            a[i][j] = 0
        }
    }
    blo = getblock()
    blo.newx()
}
function getrandomint() {
    return Math.floor(Math.random() * 7)
}
function getblock() {
    var int = getrandomint()
    //int = 6
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
class T {
    newx() {
        if (a[1][5] == 0 && a[0][4] == 0 && a[1][4] == 0 && a[2][4] == 0) {
            a[0][4] = 1
            a[2][4] = 1
            a[1][4] = 1
            a[1][5] = 1
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
                }
                break
            }
        }
    }
}
class S {
    newx() {
        if (a[0][5] == 0 && a[0][4] == 0 && a[1][4] == 0 && a[1][3] == 0) {
            a[0][4] = 6
            a[0][5] = 6
            a[1][4] = 6
            a[1][3] = 6
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
                }
                break
            }
        }
    }
}
class Z {
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][5] == 0 && a[1][6] == 0) {
            a[0][5] = 7
            a[0][4] = 7
            a[1][5] = 7
            a[1][6] = 7
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
                }
                break
                break
            }  
        }
    }
}
class O {
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][4] == 0 && a[1][5] == 0) {
            a[0][4] = 3
            a[0][5] = 3
            a[1][4] = 3
            a[1][5] = 3
            this.x = 4
            this.y=0
        }
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
            isfull()
            var sh = getblock();
            sh.newx();
            return sh
        }
    }
}
class J {
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][4] == 0 && a[2][4] == 0) {
            a[0][4] = 4
            a[0][5] = 4
            a[1][4] = 4
            a[2][4] = 4
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
                }
                break
            }
        }
    }
}
class I {
    newx() {
        for (var i = 3; i <= 6; i++) {
            if (a[0][i] == 0) {
                a[0][i] = 2
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
                    isfull()
                    var sh = getblock();
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock();
                    sh.newx()
                    return sh
                }
                break
            }
        }
    }
}
class L {
    newx() {
        if (a[0][4] == 0 && a[0][5] == 0 && a[1][5] == 0 && a[2][5] == 0) {
            a[0][4] = 5
            a[0][5] = 5
            a[1][5] = 5
            a[2][5] = 5
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
                    isfull()
                    var sh = getblock()
                    sh.newx()
                    return sh
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
            clearline(i)
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
function timefill() {
    blo = blo.fill()
}
function quick() {
    window.setInterval(timefill, 400)
}
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e) {
        switch (e.keyCode) {
            case 37: {//左方向键
                blo.left()
            }
                break
            case 38: {//上方向键
                blo.rotate()
            }
                break
            case 39: {//右方向键
                blo.right()
            }
                break
            case 40: {//下方向键
                timefill()
            }
                break
        }
    }
}
newgame()
window.setInterval(draw, 1)
quick()  //不变速度
//window.setInterval(quick,60000)  //每分钟速度翻倍