namespace BoxingStore.Test.Controllers.Api
{
    using BoxingStore.Controllers.Api;
    using BoxingStore.Test.Mocks;
    using Xunit;

    public class StatisticsApiControllerTest
    {
        [Fact]
        public void GetStatisticsShouldReturnTotalStatistics()
        {
            // Arrange
            var statisticsController = new StatisticsApiController(StatisticsServiceMock.Instance);

            // Act
            var result = statisticsController.GetStatistics();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(5, result.TotalProducts);
        }
    }
}