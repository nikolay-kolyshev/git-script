const simpleGit = require('simple-git');
const git = simpleGit();

const init = async () => {
    const info = await git.log()
    console.log(info)
}

init()
