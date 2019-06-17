import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  orderChartWalmart,
  orderChartIkea
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={orderChartWalmart.data}
                  type="Pie"
                  options={orderChartWalmart.options}
                  listener={{
                      draw: e => orderChartWalmart.onDraw(e)
                  }}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}><b>Walmart order lifecycle - 49 days</b></h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <DateRange />
                  2018
                  <p className={classes.cardCategory}>
                    <span className={classes.warningText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 5%
                    </span>{" "} excess time spent in WIP
                  </p>
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={orderChartIkea.data}
                  type="Pie"
                  options={orderChartIkea.options}
                  listener={{
                      draw: e => orderChartIkea.onDraw(e)
                  }}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}><b>IKEA order lifecycle - 38 days</b></h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <DateRange />
                  2018
                  <p className={classes.cardCategory}>
                    <span className={classes.warningText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 3%
                    </span>{" "} excess time spent in Logistics
                  </p>
                </div>
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
