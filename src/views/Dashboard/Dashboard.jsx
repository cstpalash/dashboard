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
import ArrowDownward from "@material-ui/icons/ArrowDownward";
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
  exportChart,
  roeChart,
  emailsSubscriptionChart,
  completedTasksChart
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

          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>trending_up</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Revenue forecast</p>
                <h3 className={classes.cardTitle}><b>₹ 48,199 M</b></h3>
                <h6 className={classes.successText}>
                  <ArrowUpward /><b>3.2%</b> increase in total sales.
                </h6>
                <h6 className={classes.infoText}>Home Textiles : <b>85%</b> | Paper : <b>15%</b></h6>
                <h6 className={classes.infoText}>Export : <b>59%</b> | Domestic : <b>41%</b></h6>
                <h6 className={classes.infoText}>Market Capitalisation : <b>₹ 33,005 M</b></h6>
                <h6 className={classes.infoText}>Debt-equity <b>&#60; 1</b></h6>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  *2018-19 predictive analysis
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}><b>₹ 46,705 M</b></h3>
                <h6 className={classes.warningText}>
                  <ArrowDownward /><b>2.1%</b> decrease in total sales.
                </h6>
                <h6 className={classes.infoText}>Home Textiles : <b>81%</b> | Paper : <b>19%</b></h6>
                <h6 className={classes.infoText}>Export : <b>54%</b> | Domestic : <b>46%</b></h6>
                <h6 className={classes.infoText}>Market Capitalisation : <b>₹ 30,194 M</b></h6>
                <h6 className={classes.infoText}>Debt-equity <b>&#60; 1</b></h6>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  2017-18 current
                </div>
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}><b>Yearly sales in million ₹</b></h4>
                <p className={classes.cardCategory}>
                  <span className={classes.warningText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 2.1%
                  </span>{" "} decrease in total sales since last year
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <DateRange />
                  2014-2018
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={exportChart.data}
                  type="Line"
                  options={exportChart.options}
                  listener={exportChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}><b>Yearly export in million ₹</b></h4>
                <p className={classes.cardCategory}>
                  <span className={classes.warningText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 5.6%
                  </span>{" "} decrease in total export since last year
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <DateRange />
                  2014-2018
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={roeChart.data}
                  type="Line"
                  options={roeChart.options}
                  listener={roeChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}><b>Yearly RoE and RoCE %</b></h4>
                <p className={classes.cardCategory}>
                  <span className={classes.warningText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 3.2%
                  </span>{" "} decrease in total RoE since last year
                </p>
                <p className={classes.cardCategory}>
                  <span className={classes.warningText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 1.6%
                  </span>{" "} decrease in total RoCE since last year
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <DateRange />
                  2014-2018
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
