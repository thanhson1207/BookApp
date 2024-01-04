import { StyleSheet, View } from "react-native";

import ExpensesSumary from "./ExpensesSumary";
import ExpensesList from "./ExpensesList";

import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSumary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  }
})