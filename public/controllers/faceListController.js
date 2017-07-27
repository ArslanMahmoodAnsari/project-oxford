
app.controller('faceListCtrl', ['$scope', '$http', function ($scope, $http) {
	console.log('faceList controller');

	/*Show all faces*/
	$scope.getFaces = () => {
		$http.get('/api/faces').then(response => {
			console.log(response.data);
			$scope.faces = response.data;
		})
	}
	/*add a face to a face list*/
	$scope.addFace = () => {
		$scope.data = {
			link:$scope.link,
			facelist_id:$scope.faceListId,
			name:$scope.name
		};
		$http.post('/api/faces/', $scope.data).then(response => {
			console.log(response.data.face_id);
		});
	}
	/*find a similar faces in the given face list*/
	$scope.findSimilar = () => {
		$scope.data = {
			link : $scope.link,
			faceList_id: $scope.faceListId
		 };
		$http.post('/api/faces/find', $scope.data).then( response => {
				console.log(response.data);
		});
	}
	/*Delete a face from a face list*/
	$scope.deleteFace = (id) => {
		console.log("inside deleteFace");
		console.log(id);
		$http.delete('/api/faces/'+id).then(response =>{
			console.log(response.data);
		})
	}
	

}]);

