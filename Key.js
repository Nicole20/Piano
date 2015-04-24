#pragma strict

var delta = 0;

function Start ()
{

}

function Update ()
{
	transform.Rotate(Vector3.back * delta);
}

function OnMouseDown()
{
	audio.Play();
	delta = 1;
	Wait1();
}

function Wait1()
{
	yield WaitForSeconds (0.1);
	
	delta = -1;
	Wait2();
}

function Wait2()
{
	yield WaitForSeconds (0.1);
	
	delta = 0;
}
