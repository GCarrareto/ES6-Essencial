function getName()
{
    return "Gustavo Carrareto Ribeiro";
}

function logFn(fn)
{
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);