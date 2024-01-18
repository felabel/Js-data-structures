const map = new Map([['a', 1], ['b', 2]])

// to add a new value
map.set('c', 3)
map.delete('c')
// check for a key
console.log(map.has('a'))
console.log(map.size)

map.clear()
for(const [key,value] of map){
    console.log(`${key}: ${value}`)
}