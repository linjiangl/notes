# 案例

## 统计用户登录

```php

class UserLogin
{
	/**
	 * 缓存key
	 *
	 * @var string
	 */
	protected static $key = '';

	/**
	 * 用户总数
	 *
	 * @var int
	 */
	protected static $userTotal = 0;

	public function __construct($total = 1000000, $date = '')
	{
		self::setUserTotal($total);

		if (cache()->get(self::getKey($date)) === false) {
			cache()->setBit(self::getKey($date), self::$userTotal, 0);
		}
	}

	/**
	 * 设置键名
	 *
	 * @param $date
	 * @return string
	 */
	public static function setKey($date = '')
	{
		$date = $date ? : date('Ymd');
		self::$key = 'bit_user_' . $date;

		return self::$key;
	}

	/**
	 * 获取键名
	 *
	 * @param string $date
	 * @return string
	 */
	public static function getKey($date = '')
	{
		return $date ? self::setKey($date) : self::$key;
	}

	/**
	 * 设置用户总数
	 *
	 * @param $total
	 */
	public static function setUserTotal($total)
	{
		self::$userTotal = $total;
	}

	/**
	 * 获取用户总数
	 *
	 * @return int
	 */
	public static function getUserTotal()
	{
		return self::$userTotal;
	}

	/**
	 * 记录用户登录
	 *
	 * @param $userId
	 * @param string $date
	 * @return int
	 */
	public static function userLogin($userId, $date = '')
	{
		return cache()->setBit(self::getKey($date), $userId, 1);
	}

	/**
	 * 检查用户是否登录
	 *
	 * @param $userId
	 * @param string $date
	 * @return int
	 */
	public static function checkUserLogin($userId, $date = '')
	{
		return cache()->getBit(self::getKey($date), $userId);
	}

	/**
	 * 某天登录的用户数量
	 *
	 * @param string $date
	 * @return int
	 */
	public static function dayUserLoginCount($date = '')
	{
		return cache()->bitCount(self::getKey($date));
	}

	/**
	 * 某天登录的用户明细
	 *
	 * @param string $date
	 * @return array
	 */
	public static function analysisDayUserLogin($date = '')
	{
		return self::getUserIds(self::dayUserLoginCount($date), self::getKey($date));
	}

	/**
	 * 连续多天登录的用户数量
	 *
	 * @param $startDate
	 * @param $endDate
	 * @return int
	 */
	public static function daysUserLoginCount($startDate, $endDate)
	{
		$keys = self::keys($startDate, $endDate);
		$bitOp = self::bitOpDaysUserLogin($keys);

		return cache()->bitCount($bitOp);
	}

	/**
	 * 连续多天登录的用户明细
	 *
	 * @param $startDate
	 * @param $endDate
	 * @return array
	 */
	public static function analysisDaysUserLogin($startDate, $endDate)
	{
		$keys = self::keys($startDate, $endDate);
		$bitOp = self::bitOpDaysUserLogin($keys);
		$count = cache()->bitCount($bitOp);

		return self::getUserIds($count, $bitOp);
	}

	/**
	 * 连续多天登录统计
	 *
	 * @param $keys
	 * @return string
	 */
	protected static function bitOpDaysUserLogin($keys)
	{
		$bitOp = 'bit_user_bitOp';
		cache()->delete($bitOp);
		cache()->bitOp('and', $bitOp, ...$keys);

		return $bitOp;
	}

	/**
	 * 连续多天登录的keys
	 *
	 * @param $startDate
	 * @param $endDate
	 * @return array
	 */
	public static function keys($startDate, $endDate)
	{
		$start = strtotime($startDate);
		$days = (strtotime($endDate) - $start) / 86400;
		if ($days < 1) {
			exit('最少1天的时间间隔');
		}

		$keys = [];
		$start = date('Ymd', $start);
		for ($i = 0; $i <= $days; $i++) {
			$tmp = $start + $i;
			$keys[] = self::getKey($tmp);
		}

		return $keys;
	}

	/**
	 * 获取用户明细
	 *
	 * @param int $total 登录总数
	 * @param $key
	 * @return array
	 */
	protected static function getUserIds($total, $key)
	{
		$userIds = [];

		if ($total) {
			for ($i = 1; $i <= self::$userTotal; $i++) {
				if (count($userIds) == $total) break;

				if (cache()->getBit($key, $i)) {
					array_push($userIds, $i);
				}
			}
		}

		return $userIds;
	}

}

function cache()
{
	$options = [
		'host'       => '127.0.0.1',
		'port'       => 6379,
		'password'   => '',
		'select'     => 2,
		'timeout'    => 0,
		'expire'     => 0,
		'persistent' => false,
		'prefix'     => '',
		'serialize'  => true,
	];

	$redis = new \Redis;

	$redis->connect($options['host'], $options['port'], $options['timeout']);
	//$redis->select(2);

	return $redis;
}

// 模拟数据
function day_user_login($day, $total, $num = 500)
{
	$arr = [];
	while ($num > 0) {
		$arr[] = rand(1, $total);
		--$num;
	}

	sort($arr);
	$arr = array_unique($arr);

	cache()->sAdd($day, ...$arr);

	return $arr;
}

$userTotal = 10000;

//$num = 25;
//$startDate = 20171101;
//while ($num >= 0) {
//	$key = $startDate + $num;
//	day_user_login($key, $userTotal, 7000);
//	--$num;
//}


//// 获取交集
//$num = 10;
//$startDate = 20171101;
//while ($num >= 0) {
//	$key = $startDate + $num;
//	$keys[] = $key;
//	--$num;
//}
//
////print_r($keys);
//$redis = cache();
//$redis->select(2);
//$arr = $redis->sInter(...$keys);
//sort($arr);
//print_r($arr);


// 记录登录

$date = '20171106';
$class = new UserLogin($userTotal, $date);

//$redis = cache();
//$redis->select(2);
//$arr = $redis->sMembers($date);
//
//foreach ($arr as $v) {
//	$class::userLogin($v, $date);
//}

//$res = $class::dayUserLoginCount($date);

//$res = $class::daysUserLoginCount('20171101', '20171107');

$res = $class::analysisDaysUserLogin('20171101', '20171111');
print_r($res);


```