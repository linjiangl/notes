# Tmux

### tmux 命令

```shell
# 启动新会话
$ tmux [new -s 会话名 -n 窗口名]

# 恢复会话
$ tmux at [-t 会话名]

# 列出所有会话
$ tmux ls

# 关闭会话
$ tmux kill-session [-t 会话名]
```

### ctrl+b 命令

<table>
    <tr>
	    <td colspan="2">Ctrl+b</td>
	    <td>激活控制台；此时以下按键生效</td>  
	</tr >
	<tr >
	    <td rowspan="4">系统操作</td>
	    <td>?</td>
	    <td>列出所有快捷键；按q返回</td>
	</tr>
	<tr>
	    <td>d</td>
	    <td>脱离当前会话</td>
	</tr>
	<tr>
	    <td>[</td>
	    <td>进入复制模式；此时的操作与vi/emacs相同，按q/Esc退出</td>
	</tr>
    <tr>
	    <td>:</td>
	    <td>进入命令行模式</td>
	</tr>
	<tr >
	    <td rowspan="1">常用命令</td>
	    <td>set -g mouse on</td>
	    <td>开启鼠标模式</td>
	</tr>
    <tr >
	    <td rowspan="9">窗口操作</td>
	    <td>c</td>
	    <td>创建新窗口</td>
	</tr>
    <tr >
	    <td>&</td>
	    <td>关闭当前窗口</td>
	</tr>
    <tr >
	    <td>数字键[0-9]</td>
	    <td>切换至指定窗口</td>
	</tr>
    <tr >
	    <td>p</td>
	    <td>切换至上一窗口</td>
	</tr>
    <tr >
	    <td>n</td>
	    <td>切换至下一窗口</td>
	</tr>
    <tr >
	    <td>w</td>
	    <td>通过窗口列表切换窗口</td>
	</tr>
    <tr >
	    <td>w</td>
	    <td>通过窗口列表切换窗口</td>
	</tr>
    <tr >
	    <td>,</td>
	    <td>重命名当前窗口</td>
	</tr>
    <tr >
	    <td>f</td>
	    <td>在所有窗口中查找指定文本</td>
	</tr>
    <tr >
	    <td rowspan="12">面板操作</td>
	    <td>”</td>
	    <td>将当前面板平分为上下两块</td>
	</tr>
    <tr >
	    <td>%</td>
	    <td>将当前面板平分为左右两块</td>
	</tr>
    <tr >
	    <td>x</td>
	    <td>关闭当前面板</td>
	</tr>
    <tr >
	    <td>方向键</td>
	    <td>移动光标以选择面板</td>
	</tr>
    <tr >
	    <td>Ctrl+方向键</td>
	    <td>以1个单元格为单位移动边缘以调整当前面板大小</td>
	</tr>
    <tr >
	    <td>Alt+方向键</td>
	    <td>以5个单元格为单位移动边缘以调整当前面板大小</td>
	</tr>
    <tr >
	    <td>q</td>
	    <td>显示面板编号</td>
	</tr>
    <tr >
	    <td>o</td>
	    <td>在当前窗口中选择下一面板</td>
	</tr>
    <tr >
	    <td>{</td>
	    <td>向前置换当前面板</td>
	</tr>
    <tr >
	    <td>}</td>
	    <td>向后置换当前面板</td>
	</tr>
    <tr >
	    <td>Alt+o</td>
	    <td>逆时针旋转当前窗口的面板</td>
	</tr>
    <tr >
	    <td>Ctrl+o</td>
	    <td>顺时针旋转当前窗口的面板</td>
	</tr>
</table>
