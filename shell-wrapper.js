const shellWrapper = shell => {
  const x = {
    _invoke: (funcName, func, ...args) => {
      const r = func(...args);
      if(r.code !== 0) {
        throw new Error(`Failed to execute: ${funcName}('${args.join(", ")}') (error code: ${r.code})`);
      }
    },
    exec: (...args) => {
      x._invoke('shell.exec', shell.exec, ...args,);
    },
    cp: (...args) => {
      x._invoke('shell.cp', shell.cp, ...args);
    },
    cd: (...args) => {
      x._invoke('shell.cd', shell.cd, ...args);
    }
  }
  // FIXME This should loop over all functions in shell and create wrapper methods for them
  return x;
}

module.exports = shellWrapper;
