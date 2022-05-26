function area({heigth : h, base: b}){
    return b * h
}

const rectangles = [
    {
        base:30,
        heigth:15
    },
    {
        base:45,
        heigth:22
    }
]

for (const object of rectangles) {
    console.log(area(object))
}