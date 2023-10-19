Useful git commands!

`git -b branch-name`: creates new branch
<br>
`git branch branch-name`: same as above
<br>
`git add`: stages the changes to commit (tracked files)
<br>
`git commit`: commits changes
<br>
`git status`: shows what files have been modified, which ones are tracked and which ones are not tracked


<br>
Branch conventions/rules:

this-is-a-normal-branch-name
<br>
feature/my-feature-branch: this is a branch inside a folder
<br>
bug/my-bug-fix-branch: this is another branch inside a folder
<br>
you can create branches inside folders by writing folder-name/branch-name directly in the command

IF ticket is `#1234 Build a Login` then some developers create branches with the ticket number. For example:
<br>
`feature/1234-login-feature`: this is to reference the ticket


VSCode command: CTRL/CMD+Shift+P > Git:Checkout to... > Select branch