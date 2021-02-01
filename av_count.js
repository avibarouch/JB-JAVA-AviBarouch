function print_map (){ 
/*Print a random matrix to represent a boolean map of rivers*/
    var n  = 4; // Rows
    var m = 6;  // Columns
    var matrix = new Array (n); //Row
    var i,i1 ; // row index
    var j,j1 ; // columns index
    var paragrph_map = ""; // Reset the map
    var x=0;
    for ( i = 0 ; i < n ; i++ ){ // Initialize the map 
        matrix[i] = new Array(m);
        for ( j = 0 ; j < m ; j++ ){ matrix[i][j] = 0}
    }
    matrix[0][2] = 1;
    matrix[0][4] = 1;
    matrix[1][0] = 1;
    matrix[1][3] = 1;
    matrix[1][4] = 1;
    matrix[2][0] = 1;
    matrix[2][5] = 1;
    matrix[3][0] = 1;
    matrix[3][3] = 1;
    matrix[3][4] = 1;
    matrix[3][5] = 1;
    for ( i = 0 ; i < n ; i++ ){ // Print the map 
        for ( j = 0 ; j < m ; j++ ){ 
            paragrph_map += matrix[i][j];
        }
        paragrph_map += "<br/>"
    }
    var k1=0; //rivers index
    var rivers = Array(n*m) ;
    for (k=0; k<n*m; k++) {rivers[k]=0};//Initialize the riverrs long
    k1=0;
    var start;
    for ( i = 0 ; i < n ; i++ ) {
        for (j=0 ; j<m ; j++){
            if(matrix[i][j] == 1){ // Look for start of a river
                start = false;
                if (i==0 && j==0) {//1.On the upper left corner
                    start=true;
                }
                if(i==0 && start == false){//On the upper row
                    if(matrix[i][j-1] == 0){
                        start= true;
                    }
                }
                if(j==0 && start == false){//On the left column
                    if(matrix[i-1][j] == 0){
                        start= true;
                    }
                }
                if (start == false && matrix[i][j]==1 && matrix[i][j-1]==0)//On the other part 
                {
                    start = true;
                }
                if (start == true){ //Point matrix[i][j] start a river
                    rivers[k1]++;
                    for (i1=i+1;(i1<n)&&(matrix[i1][j]==1);i1++){ //Count This river long down 
                        rivers[k1]++ 
                    }
                    if (rivers[k1]==1) {x=0};
                    for (j1=j+1;j1<m && (matrix[i][j1]==1);j1++){//Count This river long to the right
                        x++;
                    }
                    if (x>0){ rivers[k1]=x+1;}
                    k1++;
                }
            }
        }        
    }    
    document.getElementById("map").innerHTML = paragrph_map; // Pass the map
    text ="";
    for (i=0; i<k1; i++){text+="river #"+i+" is "+rivers[i]+ " parts long! <br/>" }
        document.getElementById("results").innerHTML = text;

}