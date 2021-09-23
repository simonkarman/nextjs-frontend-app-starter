# Should be run through 'yarn contentful-typescript-codegen' to ensure
# the npm packages from this repository are on the path.
FILE="./@types/generated/contentful.d.ts";
contentful-typescript-codegen --output $FILE;
cat $FILE | grep -v '@contentful/rich-text-types' | tee $FILE;
eslint @types --ext .ts,.tsx --fix;