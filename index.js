console.log(123123);
console.log(123123);
console.log(123123);
console.log(123123);

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