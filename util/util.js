module.exports.promisify = function(fn, ...args)
{
    return function(...args)
    {
        return new Promise((resolve, reject) => {
            fn(...args, (err) => !err ? resolve('done') : reject(err));
        });
    }
}