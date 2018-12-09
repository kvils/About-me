//Level 1
do {
	north();
}
while(isFree('north'));

//Level 2
while(isFree('east')) {
	east();
}

//Level 3 
do {
	south();
	if (isFree('east')) {
		east();
	}
} 
while(isFree('south'));
