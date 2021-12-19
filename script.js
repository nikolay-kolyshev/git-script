const simpleGit = require('simple-git');
const git = simpleGit();

const init = async () => {
    const info = await git.log(['origin/master..origin/test-branch-1'])
    console.log(info)
}

init()
