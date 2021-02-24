console.log(123123);
console.log(123123);
console.log(123123);
console.log(123123);

// 在github上更新的内容
// 回来的第一次更新呢
// 更新一次

function fn() {};

function fn2() {};

// 正常开发流程
/* 
 * 1、在dev开发分支上，首先合并一下主分支master上边的代码，保证与其他同事代码的同步；// git merge master(把merge上的代码同步到dev分支)
 * 2、然后进行正常的需求开发
 * 3、开发完成并且调试测试完成之后，把当前dev分支上的代码再合并到主分支上； // git merge master(把开发完成的代码合并到master主分支)
 */

/* 
 * git branch 查看当前分支
 * git branch --list 查看分支
 * git branch -a 查看分支(包含远程分支)
 * git branch dev 创建dev分支
 * git checkout <name> 切换分支
 * git checkout -b <name> 创建并进入该分支
 * git merge <name> 把<name>分支上的代码合并到当前分支
 */

//  第三次更新

/* 
 1. git log
 2. git log < file > #查看该文件每次提交记录
 3. git log - p < file > #查看每次详细修改内容的diff
 4. git log - p - 2# 查看最近两次详细修改内容的diff
 5. git log--stat# 查看提交统计信息

 */