function charCreate(top, bottom, src){
let Character = document.createElement('img')
Character.src = src
Character.style.position = 'fixed'
Character.style.left = top
Character.style.bottom = bottom
document.body.append(Character)
Character.addEventListener('click', function(){
    console.log('hi')
    Character.remove()
})
return Character

}




charCreate( '100px', '100px','assets/green-character.gif' )
charCreate('450px', '200px','./assets/pine-tree.png' )
charCreate('350px', '100px', 'assets/pillar.png')
charCreate('200px', '350px', 'assets/pine-tree.png')
charCreate('150px', '200px','assets/crate.png' )
charCreate('500px', '425px', 'assets/well.png')
charCreate('500px', '405px', 'assets/sword.png')
charCreate('165px', '185px', 'assets/sheild.png')
charCreate('600px', '100px', 'assets/staff.png')