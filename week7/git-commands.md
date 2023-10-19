Useful git commands!

`git -b branch-name`: creates new branch
<br>
`git branch branch-name`: same as above
<br>
`git branch`: see all my branches listed
<br>
`git add`: stages the changes to commit
<br>
`git commit`: commits changes
<br>
`git status`: shows what files have been modified, which ones are tracked and which ones are not tracked
<br>
`git reset`: unstages all staged files
<br>
`git reset filename.js`: unstages only the files written in command
<br>
`git push`: pushes all our commits to the remote branch
<br>
`git push --set-upstream origin bug/my-bug-fix-branch`: pushes the commits AND creates a remote branch linked to our local branch (upstream branch)
<br>
`git pull`: gets all the changes, including new remote branches, into our local machine, and merges them right away
<br>
`git fetch --all`: gets all the changes, including branches, but doesn't merge them just yet


new change

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