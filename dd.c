#include <stdio.h>
void main()
{
    int i,j;
    int set1[3][3],set2[3][3],sub[3][3];
    printf("Enter the values for Set1 Matrix\n");
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&set1[i][j]);
        }
    }
    printf("Enter the values for Set2 Matrix\n");
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            scanf("%d",&set2[i][j]);
        }
    }
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            sub[i][j]=0;
            sub[i][j]=set1[i][j]-set2[i][j];
        }
    }
    printf("Resultant Matrix is\n");
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            printf("%d\t",sub[i][j]);
        }
        printf("\n");
    }
}
