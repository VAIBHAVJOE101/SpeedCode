import React from 'react';
import Skeleton from '../../components/Skeleton';
import Card from '../../components/Card';
import '../../assets/css/skeleton.css';


function CodeforcesSkeleton() {
    const skeletonArray = Array(10).fill('');
    return (
        <div className="skeleton">
            {skeletonArray.map((item, index) => (
                <Card key={index} m="20px 0px 0px 0px" minw="1100px" h="90px" p="20px" bg="rgba(109, 181, 181, 0.33)" display="flex" alignItems="center" justify="space-between">
                    <div>
                        <Skeleton m="0px 0px 0px 20px"  h="25px" w="550px"/>
                        <Skeleton m="10px 0px 0px 20px"  h="15px" w="350px" />
                    </div>
                    <div>
                        <Skeleton m="0px 0px 0px 10px" w="180px" h="70px" />
                    </div>
                </Card>
                ))
            }
        </div>
    )
}

export default CodeforcesSkeleton
