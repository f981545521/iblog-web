# Markdown使用说明 #
---
**Markdown** 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

[Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/index.html)

## Markdown 指南 ##


提供了语法高亮和方便的快捷键功能，给您最好的 Markdown 编写体验。

来试一下：

- **粗体** (`Ctrl+B`) and *斜体* (`Ctrl+I`)
- 引用 (`Ctrl+Q`)
- 代码块 (`Ctrl+K`)
- 标题 1, 2, 3 (`Ctrl+1`, `Ctrl+2`, `Ctrl+3`)
- 列表 (`Ctrl+U` and `Ctrl+Shift+O`)


### 标题 ###
标题能显示出文章的结构。行首插入1-6个 # ，每增加一个 # 表示更深入层次的内容，对应到标题的深度由 1-6 阶。

- H1 :# Header 1
- H2 :## Header 2
- H3 :### Header 3
- H4 :#### Header 4
- H5 :##### Header 5
- H6 :###### Header 6

### 文本样式 ###

- 链接 : `[Title](URL)`
- 加粗 : `**Bold**`
- 斜体字 : `*Italics*`
- 删除线 : ~~text~~
- 高亮 : ==text==
- 段落 : 段落之间空一行
- 换行符 : 一行结束时输入两个空格
- 列表 : `-/* (无序列表)` `1. (有序列表)` 
- 引用 : `> 引用内容`
- 内嵌代码 : `alert('Hello World');`
- 画水平线 : `--------`

### 代码块

	public static void main(String[] args){
		System.out.println("hello");
	}

### 图片/超连接

1. 使用Markdown将图像插入文章，你需要在Markdown编辑器输入： `![](image.jpg) `。

2. 超链接：`文字链接 [链接名称](http://链接网址)`

3. 网址链接 <http://www.acyou.cn>

![](1.png)


### 表格


First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell


<style>
	tbody td {
		text-align: center;
		color: blue;
	}
</style>

<table width="100%" style="border-collapse: collapse" border="0">
<thead>
<tr>
  <th width="20%">First Header</th>
  <th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Content Cell</td>
  <td>Content Cell</td>
</tr>
<tr>
  <td>Content Cell</td>
  <td>Content Cell</td>
</tr>
</tbody>
</table>



