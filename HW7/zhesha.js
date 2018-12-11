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
for (i=0; i<7; i++) {
	south();
	east();
}

//Level 4
while(isFree('south')) {
  south();
  if (isFree('east')) {
    for (i = 0; i < 3; i++) {
      east();
    }
  }
}

//Level 5
for (i=0; i<6; i++) {
	east();
}
while(isFree('south')) {
	south();
}
while(isFree('west')) { 
	west();
}
for (i=0; i<3; i++) {
	south();
}
while(isFree('west')) {
	west();
}
for (i=0; i<3; i++) 
	north();
}
while(isFree('west')) {
	west();
}
for (i=0; i<5; i++) {
	south();
}
for (i=0; i<6; i++) {
	east();
}

//Level 6
while(isFree('south')) {
  south();
}
for (i=0; i<6; i++) {
  if (isFree('east')) {
    east();
  }
  else if (isFree('north')) {
    while(isFree('north')) {
      north();
    }
    east();
    do {
      south();
    }
    while(isFree('south'));
  }
}
for (i=0; i<4; i++) {
  south();
}
do {
  west();
}
while(isFree('west'));
for (i=0; i<3; i++) {
  if (isFree('south')) {
    south();
  }
  while(isFree('east')) {
    east();
  }
}

//Level 7
while(isFree('south')) {
  south();
}
for (i = 0; i < 4; i++) {
  east();
}
for (i = 0; i < 11; i++) {
  north();
}
for (i = 0; i < 3; i++) {
  east();
  if (isFree('south')) {
    do {
      south();
    }
    while(isFree('south'));
  }
}
west();
while(isFree('south')) {
  south();
}
while(isFree('east')) {
  east();
}
for (i = 0; i < 9; i++) {
  south();
  if (isFree('east')) {
    east();
  }
}
