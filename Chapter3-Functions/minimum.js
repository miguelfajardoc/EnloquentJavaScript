const min = function (x, y)
{
    if (isNaN(x) || isNaN(y))
    {
        return NaN;
    }
    let minimum = x;
    if (x <= y)
    {
        minimum = x;
    }
    else
    {
        minimum = y;
    }
    return minimum;
}
console.log(min(0, 10));
console.log(min(-5, -10));