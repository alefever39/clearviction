import { Box, Container, Grid, Typography } from "@material-ui/core";
import { ResourcesStyles } from "../../Styles/ResourcesStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import wallet from "../../Assets/wallet.svg";
import { IconWithHeaderAndText } from "../WhyVacate/IconWithHeaderAndText";
import { LocalAtmOutlined, CreateOutlined, AssignmentIndOutlined  } from "@material-ui/icons";
const AssistanceEducation = () => {
  const classes = ResourcesStyles();
  return (
    <>
      <Container className={classes.regularContainer} maxWidth="lg">
        <Typography className={classes.headingStyle} variant="h2">
          Education available post-incarceration
        </Typography>
        <Typography className={classes.contentTextStyle} variant="body1">
          Conviction history should not affect educational opportunities after
          jail or prison, yet many college and universities will collect
          background information and have full discretion over the admissions
          process.
        </Typography>
        <Grid className={classes.regularContainer} container>
          <Grid item xs={12} sm={6}>
            <Typography>
              Writing a letter of explanation, gathering refrences, and
              providing any further aditional information may help in the
              application process.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              You should never lie on you application. It could result in
              voiding your application or expulsion if admitted prior to the
              school finding out.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.lightBlueBackGround}>
        <Container maxWidth="lg">
          <ListItemMobileSnap
            textLeft
            text={
              <div>
                <Typography className={classes.headingStyle} variant="h2">
                  Financial student aid
                </Typography>
                <Typography>
                  For the most part, restrictions on recieving financial aid are
                  removed once released. As long as the conditions of your
                  sentence are being met, you will most likey be able to benefit
                  from federal student aid, as well as a few grants and
                  scholarships.
                </Typography>
              </div>
            }
            image={<Box component="img" src={wallet} height={300} />}
          />
        </Container>
      </Box>
      <Container>
        <Typography className={classes.headingStyle} variant="h2">
          Federal Student Aid
        </Typography>
        <Typography className={classes.contentTextStyle} variant="body1">
          The U.S. Department of Education's office of Federal Student Aid
          provides more than $120 billion in financial aid to help pay for
          college or career school each year. Below are ones that apply to the
          former incarcerated.
          <br />
          <br />
          If you want to know more, check out the Federal Government’s FAQ on
          Incarcerated Individuals and Eligibility for Federal Student Aid.
        </Typography>
        <Box className={classes.regularContainer}>
          <IconWithHeaderAndText
            icon={LocalAtmOutlined}
            header={"Free Application for Federal Student Aid (FAFSA)"}
            text={[
              "The main Federal Student Aid, necessary to apply for further grants. May be completed online at FAFSA’s website.",
            ]}
          />
          <IconWithHeaderAndText
            icon={CreateOutlined}
            header={"Federal Pell Grants"}
            text={[
              "Federal Pell Grants are awarded to undergraduate students who display exceptional financial need and have not earned a bachelor's, graduate, or professional degree.",
            ]}
          />
          <IconWithHeaderAndText
            icon={AssignmentIndOutlined}
            header={"Federal Work-Study Programs"}
            text={[
              "This program provides part-time jobs for undergraduate and graduate students with financial need, allowing them to earn money to help pay education expenses.You apply through your school, you will be paid by your school, and you will work either at your school or an organization that partners with your school. ",
            ]}
          />
        </Box>
      </Container>
    </>
  );
};

export default AssistanceEducation;
