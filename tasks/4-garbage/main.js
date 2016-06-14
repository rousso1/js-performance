var Rambo = function (options) {
    this.x = options.x;
    this.y = options.y;
    this.bulletSpeed = options.bulletSpeed;
    this.bullets = [];

    //our Rambo lady animation consists of 3 frames - we are loading them here
    this.frames = [];
    for (var i = 1; i <= 3; i++) {
        var frame = document.createElement('img');
        frame.src = 'img/rambo_' + i + '.png';
        this.frames.push(frame);
    }

    this.currentFrame = 0;
};

Rambo.prototype.shoot = function () {
    var angle = (Math.random() * Math.PI / 4) - Math.PI / 8;
    var bullet = new Bullet(this.x + 75, this.y - 60, angle, this.bulletSpeed);

    this.bullets.push(bullet);
};

Rambo.prototype.update = function () {
    this.currentFrame = (this.currentFrame < 2) ? this.currentFrame + 1 : 0;

    this.bullets.forEach(function (bullet) {
        if(!bullet.isDestroyed()) {
            bullet.update();
        }
    });
};

Rambo.prototype.render = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    var frame = this.frames[this.currentFrame];
    ctx.drawImage(frame, -frame.height / 2, -frame.width / 2, frame.width, frame.height);
    ctx.restore();

    this.bullets.forEach(function (bullet) {
        if(!bullet.isDestroyed()) {
            bullet.render(ctx);
        }
    });
};

var Bullet = function (startX, startY, angle, speed) {
    this.x = startX;
    this.y = startY;
    this.angle = angle;
    this.speed = speed;
    this.destroyed = false;

    this.frame = document.createElement('img');
    this.frame.src = 'img/bullet.png';
};

Bullet.prototype.update = function () {
    var vBx = this.speed * Math.cos(this.angle); //Speed of bullet on x-axis
    var vBy = this.speed * Math.sin(this.angle); //Speed of bullet on y-axis

    this.x += vBx;
    this.y += vBy;

    if (this.x < 0 || this.x > 800 || this.y < 0 || this.y > 600) {
        this.destroyed = true;
    }
};

Bullet.prototype.render = function (ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(this.frame, -this.frame.height / 2, -this.frame.width / 2, this.frame.width, this.frame.height);
    ctx.restore();
};

Bullet.prototype.isDestroyed = function () {
    return this.destroyed;
};