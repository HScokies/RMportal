document.addEventListener('mousemove', (e) =>{
    const sun = document.getElementById("sbanner").getBoundingClientRect();
    const mX = e.clientX, mY = e.clientY;
    const aX = sun.left + sun.width/2, aY = sun.top + sun.height/2;
    const Angle = Solution(mX,mY,aX,aY);
    document.getElementById('RightSocket').style.transform = `rotate(${Angle}deg)`;
    document.getElementById('LeftSocket').style.transform = `rotate(${Angle}deg)`;
});
function Solution(cX,cY,eX,eY){
    const dy = eY-cY, dx = eX-cX;
    return ((Math.atan2(dy,dx)*180)/Math.PI);
}