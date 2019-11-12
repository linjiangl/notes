# 设计模式

## 多态模式

```php
/**
 * 多态模式
 */

//一个老虎的抽象类
abstract class Tiger{

	//一个抽象的方法: 爬树
	public abstract function climb();
}

//西伯利亚虎
class XTiger extends Tiger {

	public function climb(){
		echo '不能爬树';
	}
}

//孟加拉虎
class MTiger extends Tiger {

	public function climb() {
		echo '能爬树';
	}
}

//调用类
class Client {
	//指定类型
	public static function call(XTiger $animal) {
		$animal->climb();
	}

	// //通用类型
	// public static function call($animal) {
	// 	$animal->climb();
	// }
}

Client::call(new XTiger);
Client::call(new MTiger);
```

## 工厂模式

> 简单工厂

```php
//公共接口
interface db {
	function conn ();
}

//服务器开发
class dbmysql implements db {
	public function conn() {
		echo '连接mysql成功';
	}
}

class dbsqlite implements db {
	public function conn() {
		echo '连接sqlite成功';
	}
}

class factory {
	public static function createdb($type) {
		if ($type == 'mysql') {
			return new dbmysql();
		}
		else if ($type == 'sqlite') {
			return new dbsqlite();
		}
		else {
			return new Exception('连接异常', 1);
		}
	}
}


//客户端
$db = factory::createdb('mysql');
$db->conn();

$db = factory::createdb('sqlite');
$db->conn();

$db = factory::createdb('oracle');
$db->conn();
```

> 工厂方法

```php
//公共接口
interface db {
	function conn ();
}

interface Factory {
	function createdb ();
}


//服务器开发
class dbmysql implements db {
	public function conn() {
		echo '连接mysql成功';
	}
}

class dbsqlite implements db {
	public function conn() {
		echo '连接sqlite成功';
	}
}

class mysqlFactory implements Factory {
	public function createdb() {
		return new dbmysql();
	}
}

class sqliteFactory implements Factory {
	public function createdb() {
		return new dbsqlite();
	}
}

//客户端
$fact = new mysqlFactory();
$db = $fact->createdb();
$db->conn();

$fact = new sqliteFactory();
$db = $fact->createdb();
$db->conn();
```

## 单例模式

```php
class single {
	protected static $ins = null;

	/**
	 * 1. 不给new 这个类
	 * 2. 不给继承这个类
	 */
	final protected function __construct() {

	}

	//向外部开放的方法
	public static function getIns() {
		if (self::$ins == null) {
			self::$ins = new self;
		}
		return self::$ins;
	}

	/**
	 * 不给clone这个类
	 * @return [type] [description]
	 */
	final protected function __clone() {

	}
}

$s1 = single::getIns();
$s2 = single::getIns();

if ($s1 === $s2) {
	echo '同一个类';
}
else {
    echo '不是同一个类';
}
```

## 观察者模式

```php
class user implements SplSubject {
	public $login_num;  		//登录次数
	public $hobby;				//爱好

	protected $observer = null;

	public function __construct ($hobby) {
		$this->login_num = rand (1, 10);
		$this->hobby = $hobby;
		$this->observer = new SplObjectStorage();
	}

	public function login() {
		//登录 成功
		//
		$this->notify();
	}

	public function attach (SplObserver $observer) {
		$this->observer->attach ($observer);
	}

	public function detach (SplObserver $observer) {
		$this->observer->detach ($observer);
	}

	public function notify () {
		$this->observer->rewind();

		while ($this->observer->valid()) {
			$observer = $this->observer->current();
			$observer->update($this);
			$this->observer->next();
		}
	}

}


//安全登录
class secriyt implements SplObserver {
	public function update(SplSubject $subject) {
		if ($subject->login_num < 5) {
			echo '登录' . $subject->login_num . '次, 登录无异常';
		}
		else {
			echo '登录' . $subject->login_num . '次, 登录有异常';
		}
	}
}

//广告
class adv implements SplObserver {
	public function update(SplSubject $subject) {
		if ($subject->hobby == 'sports') {
			echo '爱好运动';
		}
		else {
			echo '爱好其他';
		}
	}
}


//实施观察
$user = new user('sports');
$user->attach(new secriyt());
$user->attach(new adv());
$user->login();
```

## 责任链模式

```php
/**
 * 责任链模式
 * 例: 论坛审核: 版主,管理员,警察
 */

//编辑人员
class board {
	protected $power = 1;  //级别
	protected $top = 'admin';  //上级

	public function process($lev) {
		if ($lev <= $this->power) {
			echo '删除帖子';
		}
		else {
			$top = new $this->top();
			$top->process($lev);
		}
	}
}

//管理员
class admin {
	protected $power = 2;  //级别
	protected $top = 'police';  //上级

	public function process($lev) {
		if ($lev <= $this->power) {
			echo '永久封号';
		}
		else {
			$top = new $this->top();
			$top->process($lev);
		}
	}
}

//警察
class police {

	public function process($lev) {
		echo 'game over';
	}
}


//处理举报问题
$lev = $_GET['lev'] + 0; //处理级别

$rs = new board();
$rs->process($lev);
```

## 策略模式

```php
//运算接口
interface Math{
	public function calc($op1, $op2);
}


//加法运算
class MathAdd implements Math{
	public function calc($op1, $op2) {
		return $op1 + $op2;
	}
}

//减法运算
class MathSub implements Math{
	public function calc($op1, $op2) {
		return $op1 - $op2;
	}
}

//乘法运算
class MathMul implements Math{
	public function calc($op1, $op2) {
		return $op1 * $op2;
	}
}


//除法运算
class MathDiv implements Math{
	public function calc($op1, $op2) {
		return $op1 / $op2;
	}
}



//封装一个虚拟计算机
class CMath {
	protected $calc = null;

	public function __construct($type) {
		$calc = 'Math' . $type;
		$this->calc = new $calc();
	}

	public function calc($op1, $op2) {
		return $this->calc->calc($op1, $op2);
	}
}


//测试
//http://test.com/strategy.php?f=3&t=4&type=Sub
$cmath = new CMath($_GET['type']);
echo $cmath->calc($_GET['f'], $_GET['t']);

```

## 装饰模式

```php
//装饰器模式, 做文章编辑
class BaseArt {
	protected $content;

	protected $art = null;

	public function __construct($content) {
		$this->content = $content;
	}

	//装饰文章
	public function decorator() {
		return $this->content;
	}

}

//编辑 编辑文章
class BianArt extends BaseArt {

	public function __construct(BaseArt $art) {
		$this->art = $art;
		$this->decorator();
	}

	public function decorator() {
		return $this->content = $this->art->decorator() . '文章摘要!';
	}
}

//seo 添加文章关键字
class SeoArt extends BaseArt {

	public function __construct(BaseArt $art) {
		$this->art = $art;
		$this->decorator();
	}

	public function decorator() {
		return $this->content = $this->art->decorator() . 'seo 关键字!';
	}
}

$b = new Seoart(new BianArt(new BaseArt('iphone 6 好吗!')));
echo  $b->decorator();

```

## 适配模式

```php
//服务端代码
class tianqi {
	public static function show() {
		$today = array(
			'tcp' => '28',  //温度
			'wind' => '10',  //风力
			'sun' => 'sunny'  //阳光
		);

		return serialize($today);
	}
}


//适配接口
class AdapterTianqi extends tianqi {
	public static function show() {
		$today = parent::show();
		$today = unserialize($today);
		$today = json_encode($today);
		return $today;
	}
}

//php客户端调用
$tq = unserialize(tianqi::show());
echo '温度:' , $tq['tcp'] , "<br/>";
echo '风力:' , $tq['wind'] , "<br/>";
echo '阳光:' , $tq['sun'] , "<br/>";


//安卓客户端
$tq = AdapterTianqi::show();
$tq = json_decode($tq, true);
echo '温度:' , $tq['tcp'] , "<br/>";
echo '风力:' , $tq['wind'] , "<br/>";
echo '阳光:' , $tq['sun'] , "<br/>";
```

## 桥接模式

```php
abstract class info {
	protected $send = null;

	public function __construct($send) {
		$this->send = $send;
	}

	abstract public function msg($content);

	public function send($to, $content){
		$content = $this->msg($content);
		$this->send->send($to, $content);
	}
}


class commonInfo extends info{
	public function msg($content) {
		return '普通' . $content;
	}
}

class warnInfo extends info{
	public function msg($content) {
		return '紧急' . $content;
	}
}

class dangerInfo extends info{
	public function msg($content) {
		return '特急' . $content;
	}
}

class zn {
	public function send($to, $content) {
		echo '站内给',$to,'内容是:'.$content;
	}
}

class email {
	public function send($to, $content) {
		echo '邮箱给',$to,'内容是:',$content;
	}
}

class sms {
	public function send($to, $content) {
		echo '短信给',$to,'内容是:',$content;
	}
}



//站内发普通信息
$common = new commonInfo(new zn());
$common->send('小明', '吃饭了');

echo "<br>";

//短信发特急信息
$danger = new dangerInfo(new sms());
$danger->send('小强', '你老婆快生了');
```
