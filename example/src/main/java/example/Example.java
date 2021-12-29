package example;

import java.util.List;
import folkforms.textio.TextIO;
import folkforms.stringutils.StringUtils;

public class Example {
  public static void main(String[] args) throws Exception {
    System.out.println("This is some example code.");

    List<String> jarFiles = TextIO.glob("./*.jar");
    System.out.println(String.format("Found %s jar files", jarFiles.size()));

    String[] tokens = StringUtils.splitCSV("foo,bar,muk", ",");
    System.out.println(String.format("tokens.length = %s", tokens.length));
  }
}
