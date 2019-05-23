function select(array, property) {
    return array.map(a => a[property]);
}

function max(array) {
    return array.reduce((maxValue, currentValue) => maxValue > currentValue ? maxValue : currentValue);
}

function selectFlat(array, property) {
    return array.reduce((x, y) => [...x, ...y[property]], []);
}

function selectFloat(array, property) {
    return array.map(a => parseFloat(a[property]));
}

function distinct(value, index, self) {
    return self.indexOf(value) == index;
}

function countArray(array, value) {
    return array.filter(y => y == value).length;
}

function reduceCountObject(array) {
    return (obj, property) => ({...obj, [property]: countArray(array, property)});
}

function countProperties(array) {
    return array
        .filter(distinct)
        .reduce(reduceCountObject(array), {});
}

function selectLatitude(data) {
    return selectFloat(data, 'latitude');
}

function maxLatitude(data) {
    return max(selectLatitude(data));
}

function countLatitude(data) {
    return countProperties(selectLatitude(data));
}

function countTags(data) {
    return countProperties(selectFlat(data, 'tags'));
}

export default {
    transform: (data) =>
        ({
            maxLatitude: maxLatitude(data),
            countLatitude: countLatitude(data),
            countTags: countTags(data)
        })
}
