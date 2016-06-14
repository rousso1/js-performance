var Rambo = function (options) {
    this.x = options.x;
    this.y = options.y;
    this.bulletSpeed = options.bulletSpeed;

    this.precalculated = {
        pi4: Math.PI / 4,
        pi8: Math.PI / 8,
        bulletx: this.x + 305,
        bullety: this.y + 120
    };

    this.currentFrame = 0;
};

Rambo.prototype.shoot = function () {
    var angle = (Math.random() * this.precalculated.pi4) - this.precalculated.pi8;
    bulletPool.createBullet(this.precalculated.bulletx, this.precalculated.bullety, angle, this.bulletSpeed);
};

Rambo.prototype.update = function () {
    this.currentFrame = (this.currentFrame < 2) ? this.currentFrame + 1 : 0;

    var bullets = bulletPool.getAll();
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].update();
    }
};

Rambo.prototype.render = function (ctx) {
    ctx.drawImage(assetsManager.get('rambo' + this.currentFrame), this.x, this.y);

    var bullets = bulletPool.getAll();
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].render(ctx);
    }
};

var BulletPool = function () {
    this.bullets = [];
};

BulletPool.prototype.createBullet = function (startX, startY, angle, speed) {
    var bullet;

    for (var i = 0; i < this.bullets.length; i++) {
        if (this.bullets[i].isDestroyed()) {
            bullet = this.bullets[i];
            break;
        }
    }

    if (!bullet) {
        bullet = new Bullet();
        this.bullets.push(bullet);
    }

    bullet.init(startX, startY, angle, speed);

    return bullet;
};

BulletPool.prototype.getAll = function () {
    return this.bullets;
};

var Bullet = function () {
};

Bullet.prototype.init = function (startX, startY, angle, speed) {
    this.x = startX;
    this.y = startY;
    this.angle = angle;
    this.speedX = Math.floor(speed * Math.cos(angle)); //Speed of bullet on x-axis
    this.speedY = Math.floor(speed * Math.sin(angle)); //Speed of bullet on y-axis
    this.destroyed = false;
};

Bullet.prototype.update = function () {
    if (this.isDestroyed()) {
        return;
    }

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > 800 || this.y < 0 || this.y > 600) {
        this.destroyed = true;
    }
};

Bullet.prototype.render = function (ctx) {
    if (this.isDestroyed()) {
        return;
    }

    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(assetsManager.get('bullet'), 0, 0);
    ctx.rotate(-this.angle);
    ctx.translate(-this.x, -this.y);
};

Bullet.prototype.isDestroyed = function () {
    return this.destroyed;
};

var AssetsManager = function () {
    var assets = {};

    this.load = function (id, url) {
        assets[id] = document.createElement('img');
        assets[id].src = url;
    };

    this.get = function (id) {
        return assets[id];
    };
};

var assetsManager = new AssetsManager();
assetsManager.load('bullet', 'img/bullet.png');
assetsManager.load('rambo0', 'img/rambo_1.png');
assetsManager.load('rambo1', 'img/rambo_2.png');
assetsManager.load('rambo2', 'img/rambo_3.png');

var bulletPool = new BulletPool();