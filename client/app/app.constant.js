(function(angular, undefined) {
  angular.module("meanTutorialApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);