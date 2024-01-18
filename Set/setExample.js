const set = new Set([1,2,3])

// to check if a vlaue exists is in set
console.log(set.has(3))
set.delete(3)

// check num of properties
console.log(set.size)

// to clear the set
set.clear()
for (const item of set) {
    console.log(item)
}